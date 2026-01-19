import { useState, useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FilterChips from './FilterChips';
import MediaCard from './MediaCard';
import Lightbox from './Lightbox';
import { FadeIn, StaggerContainer, StaggerItem } from './animations/MotionComponents';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  thumbnail: string;
  title: string;
  category: string;
  description?: string;
  size?: 'small' | 'medium' | 'large';
}

const mediaItems: MediaItem[] = [
  {
    id: '1',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600',
    title: 'Community Education Center Opening',
    category: 'Education',
    description: 'Inaugurating our new learning facility serving 500+ students annually',
    size: 'large',
  },
  {
    id: '2',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600',
    title: 'Youth Football Championship',
    category: 'Football Club',
    description: 'Annual tournament bringing together 24 youth teams',
    size: 'medium',
  },
  {
    id: '3',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600',
    title: 'Affordable Housing Project Phase II',
    category: 'Housing',
    description: 'Delivering 200 new homes to families in need',
    size: 'large',
  },
  {
    id: '4',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600',
    title: 'Volunteer Build Day',
    category: 'Philanthropy',
    description: 'Over 100 volunteers helping build homes for local families',
    size: 'medium',
  },
  {
    id: '5',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?w=600',
    title: 'Sports Day Event',
    category: 'Events',
    description: 'Annual community sports day with over 500 participants',
    size: 'small',
  },
  {
    id: '6',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600',
    title: 'Scholarship Award Ceremony',
    category: 'Education',
    description: 'Recognizing 50 outstanding students with full scholarships',
    size: 'medium',
  },
  {
    id: '7',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600',
    title: 'Football Training Camp',
    category: 'Football Club',
    description: 'Professional coaching for underprivileged youth',
    size: 'large',
  },
  {
    id: '8',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600',
    title: 'Digital Literacy Workshop',
    category: 'Education',
    description: 'Teaching essential tech skills to community members',
    size: 'small',
  },
  {
    id: '9',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600',
    title: 'Community Food Drive',
    category: 'Philanthropy',
    description: 'Distributing supplies to 1,000+ families during holidays',
    size: 'medium',
  },
  {
    id: '10',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600',
    title: 'New Community Center',
    category: 'Housing',
    description: 'Multi-purpose facility for community gatherings and events',
    size: 'medium',
  },
  {
    id: '11',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600',
    title: 'Youth League Finals',
    category: 'Football Club',
    description: 'Championship game with over 2,000 spectators',
    size: 'small',
  },
  {
    id: '12',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600',
    title: 'Annual Charity Gala',
    category: 'Events',
    description: 'Raising funds for community programs and initiatives',
    size: 'large',
  },
];

const filters = ['All', 'Philanthropy', 'Housing', 'Education', 'Football Club', 'Events'];

const MediaMosaic = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return mediaItems;
    return mediaItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const openLightbox = (index: number) => {
    setCurrentItemIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextItem = () => {
    if (currentItemIndex < filteredItems.length - 1) {
      setCurrentItemIndex(currentItemIndex + 1);
    }
  };

  const prevItem = () => {
    if (currentItemIndex > 0) {
      setCurrentItemIndex(currentItemIndex - 1);
    }
  };

  return (
    <section id="mosaic" className="pt-24 pb-16 px-4 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          y: backgroundY,
          background: 'radial-gradient(ellipse at 50% 0%, hsl(38 92% 50% / 0.15) 0%, transparent 60%)',
        }}
      />
      
      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <FadeIn className="text-center mb-12">
          <h1 className="section-title">Building Communities, Changing Lives</h1>
          <p className="section-subtitle mx-auto mt-4">
            Witness the impact of our social welfare initiatives through the stories and moments we've captured.
          </p>
        </FadeIn>

        {/* Filter chips */}
        <FadeIn delay={0.2} className="mb-10">
          <FilterChips
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </FadeIn>

        {/* Masonry grid with stagger animation */}
        <StaggerContainer className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filteredItems.map((item, index) => (
            <StaggerItem key={item.id} className="break-inside-avoid">
              <MediaCard
                {...item}
                onClick={() => openLightbox(index)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Lightbox */}
        <Lightbox
          isOpen={lightboxOpen}
          currentItem={filteredItems[currentItemIndex] || null}
          items={filteredItems}
          onClose={closeLightbox}
          onNext={nextItem}
          onPrev={prevItem}
        />
      </div>
    </section>
  );
};

export default MediaMosaic;
