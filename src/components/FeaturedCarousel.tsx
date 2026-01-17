import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

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

const FeaturedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Stories of Impact</h2>
          <p className="section-subtitle mx-auto mt-4">
            Real stories from the communities we serve
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main carousel */}
          <div className="relative overflow-hidden rounded-2xl aspect-[16/9]">
            {stories.map((story, index) => (
              <div
                key={story.id}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentIndex 
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {story.title}
                  </h3>
                  <p className="text-foreground/80 text-lg mb-4 max-w-2xl">
                    {story.summary}
                  </p>
                  <a
                    href={story.link}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Read Full Story <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-secondary/80 hover:bg-secondary text-foreground transition-colors z-10"
            aria-label="Previous story"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-secondary/80 hover:bg-secondary text-foreground transition-colors z-10"
            aria-label="Next story"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-secondary hover:bg-muted-foreground'
                }`}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;
