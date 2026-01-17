import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { FadeIn } from './animations/MotionComponents';

interface Story {
  id: string;
  image: string;
  title: string;
  summary: string;
  link: string;
}

const stories: Story[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200',
    title: 'Maria\'s Dream Home Becomes Reality',
    summary: 'After years of waiting, Maria and her family moved into their new home built through our affordable housing initiative.',
    link: '/contact',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=1200',
    title: 'From Streets to Stadium: Ahmed\'s Journey',
    summary: 'Young Ahmed discovered his passion for football through our youth program and now plays for the regional team.',
    link: '/contact',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200',
    title: 'Scholarship Opens Doors for Rural Students',
    summary: 'Our education fund has helped 500 students from underserved communities pursue higher education.',
    link: '/contact',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200',
    title: 'Community Center: A Hub of Hope',
    summary: 'The new community center serves as a gathering place for events, training, and social support programs.',
    link: '/contact',
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200',
    title: 'Volunteers Building Futures Together',
    summary: 'Over 1,000 volunteers have contributed 50,000+ hours to our community building projects.',
    link: '/contact',
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.9,
  }),
};

const FeaturedCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  const currentIndex = ((page % stories.length) + stories.length) % stories.length;

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setPage([page + 1, 1]);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, page]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    const newDirection = index > currentIndex ? 1 : -1;
    setPage([index, newDirection]);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 px-4 bg-card/50 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto">
        <FadeIn className="text-center mb-12">
          <h2 className="section-title">Stories of Impact</h2>
          <p className="section-subtitle mx-auto mt-4">
            Real stories from the communities we serve
          </p>
        </FadeIn>

        <div className="relative max-w-5xl mx-auto">
          {/* Main carousel */}
          <div className="relative overflow-hidden rounded-2xl aspect-[16/9]">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.4 },
                }}
                className="absolute inset-0"
              >
                <motion.div 
                  className="w-full h-full"
                  style={{ y: imageY }}
                >
                  <img
                    src={stories[currentIndex].image}
                    alt={stories[currentIndex].title}
                    className="w-full h-[115%] object-cover"
                  />
                </motion.div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Content */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-6 md:p-10"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {stories[currentIndex].title}
                  </h3>
                  <p className="text-foreground/80 text-lg mb-4 max-w-2xl">
                    {stories[currentIndex].summary}
                  </p>
                  <motion.a
                    href={stories[currentIndex].link}
                    className="inline-flex items-center gap-2 text-primary font-semibold"
                    whileHover={{ gap: 12 }}
                    transition={{ duration: 0.2 }}
                  >
                    Read Full Story <ArrowRight className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <motion.button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-secondary/80 hover:bg-secondary text-foreground transition-colors z-10"
            aria-label="Previous story"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          
          <motion.button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-secondary/80 hover:bg-secondary text-foreground transition-colors z-10"
            aria-label="Next story"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {stories.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className="h-3 rounded-full bg-secondary"
                animate={{
                  width: index === currentIndex ? 32 : 12,
                  backgroundColor: index === currentIndex ? 'hsl(38 92% 50%)' : 'hsl(220 15% 20%)',
                }}
                transition={{ duration: 0.3 }}
                aria-label={`Go to story ${index + 1}`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;
