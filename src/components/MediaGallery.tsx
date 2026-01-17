import { useState, useMemo } from 'react';
import { Play, Eye, Filter } from 'lucide-react';
import FilterChips from './FilterChips';
import Lightbox from './Lightbox';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  thumbnail: string;
  title: string;
  category: string;
  description?: string;
  duration?: string;
  tags?: string[];
}

const galleryItems: MediaItem[] = [
  {
    id: 'g1',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600',
    title: 'Home Dedication Ceremony',
    category: 'Housing',
    description: 'Family receiving keys to their new home',
    tags: ['ceremony', 'family', 'housing'],
  },
  {
    id: 'g2',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=600',
    title: 'Youth Training Session',
    category: 'Football Club',
    description: 'Weekly training at our youth academy',
    tags: ['training', 'youth', 'football'],
  },
  {
    id: 'g3',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600',
    title: 'Back to School Drive',
    category: 'Education',
    description: 'Distributing school supplies to students',
    tags: ['education', 'supplies', 'community'],
  },
  {
    id: 'g4',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600',
    title: 'Community Food Drive',
    category: 'Philanthropy',
    description: 'Volunteers sorting donations',
    tags: ['food', 'volunteers', 'community'],
  },
  {
    id: 'g5',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600',
    title: 'Community Center Grand Opening',
    category: 'Events',
    description: 'Ribbon cutting ceremony for new facility',
    tags: ['event', 'opening', 'community'],
  },
  {
    id: 'g6',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600',
    title: 'Mentorship Program',
    category: 'Education',
    description: 'One-on-one tutoring sessions',
    tags: ['mentorship', 'education', 'youth'],
  },
  {
    id: 'g7',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
    title: 'Construction in Progress',
    category: 'Housing',
    description: 'Building homes with volunteer teams',
    tags: ['construction', 'volunteers', 'housing'],
  },
  {
    id: 'g8',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=600',
    title: 'Match Day Celebration',
    category: 'Football Club',
    description: 'Fans celebrating a victory',
    tags: ['match', 'celebration', 'football'],
  },
  {
    id: 'g9',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600',
    title: 'Volunteer Build Day',
    category: 'Philanthropy',
    description: 'Corporate partners joining our mission',
    tags: ['volunteers', 'corporate', 'build'],
  },
  {
    id: 'g10',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1594708767771-a5e9d3c4c37a?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1594708767771-a5e9d3c4c37a?w=600',
    title: 'Annual Gala',
    category: 'Events',
    description: 'Fundraising event with community leaders',
    tags: ['gala', 'fundraising', 'event'],
  },
  {
    id: 'g11',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600',
    title: 'Student Success Workshop',
    category: 'Education',
    description: 'Career guidance for scholarship recipients',
    tags: ['workshop', 'career', 'students'],
  },
  {
    id: 'g12',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=600',
    title: 'Completed Housing Development',
    category: 'Housing',
    description: 'Aerial view of completed community',
    tags: ['housing', 'development', 'aerial'],
  },
];

const filters = ['All', 'Philanthropy', 'Housing', 'Education', 'Football Club', 'Events'];

const MediaGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Media Gallery</h2>
          <p className="section-subtitle mx-auto mt-4">
            Explore our complete collection of photos and videos documenting our community impact
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10">
          <FilterChips
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${0.05 * (index % 12)}s` }}
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-xs text-primary font-medium uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h4 className="text-foreground font-semibold text-sm line-clamp-2">{item.title}</h4>
                <div className="flex items-center gap-1 mt-2 text-sm text-foreground/80">
                  {item.type === 'video' ? (
                    <>
                      <Play className="w-4 h-4" />
                      <span>{item.duration || 'Play'}</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-4 h-4" />
                      <span>View</span>
                    </>
                  )}
                </div>
              </div>

              {/* Video indicator */}
              {item.type === 'video' && (
                <div className="absolute top-3 right-3 px-2 py-1 rounded bg-background/80 text-foreground text-xs font-medium flex items-center gap-1">
                  <Play className="w-3 h-3" fill="currentColor" />
                  {item.duration}
                </div>
              )}

              {/* Tags */}
              {item.tags && (
                <div className="absolute top-3 left-3 flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-primary/80 text-primary-foreground text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load more (placeholder) */}
        <div className="text-center mt-10">
          <button className="cta-button-outline">
            Load More Media
          </button>
        </div>

        <Lightbox
          isOpen={lightboxOpen}
          currentItem={filteredItems[currentIndex] || null}
          items={filteredItems}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setCurrentIndex((prev) => Math.min(prev + 1, filteredItems.length - 1))}
          onPrev={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
        />
      </div>
    </section>
  );
};

export default MediaGallery;
