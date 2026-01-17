import { useState } from 'react';
import { Play, Users, Trophy, Heart, ArrowRight } from 'lucide-react';
import Lightbox from './Lightbox';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  thumbnail: string;
  title: string;
  category: string;
  description?: string;
}

const clubMedia: MediaItem[] = [
  {
    id: 'club-1',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600',
    title: 'Championship Victory',
    category: 'Match Highlights',
    description: 'Our youth team celebrating their regional championship win',
  },
  {
    id: 'club-2',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600',
    title: 'Training Session',
    category: 'Training',
    description: 'Professional coaching sessions for our youth athletes',
  },
  {
    id: 'club-3',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600',
    title: 'Match Day Energy',
    category: 'Match Highlights',
    description: 'Fans cheering during the league finals',
  },
  {
    id: 'club-4',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600',
    title: 'Community Sports Day',
    category: 'Outreach',
    description: 'Annual sports event bringing the community together',
  },
  {
    id: 'club-5',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=600',
    title: 'Youth Academy',
    category: 'Training',
    description: 'Our state-of-the-art training facility',
  },
  {
    id: 'club-6',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1529629468123-b0d4f2edfc3b?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1529629468123-b0d4f2edfc3b?w=600',
    title: 'Award Ceremony',
    category: 'Outreach',
    description: 'Recognizing outstanding young athletes',
  },
];

const roster = [
  { name: 'Coach David Mensah', role: 'Head Coach' },
  { name: 'Sarah Okonkwo', role: 'Assistant Coach' },
  { name: 'Michael Adeyemi', role: 'Youth Coordinator' },
  { name: 'James Kwarteng', role: 'Team Captain (U-18)' },
];

const ClubMedia = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="club" className="py-20 px-4 bg-card/50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Trophy className="w-4 h-4" />
            Global FC Youth Club
          </div>
          <h2 className="section-title">Building Champions On & Off the Field</h2>
          <p className="section-subtitle mx-auto mt-4">
            Our football program uses sport to teach discipline, teamwork, and leadership while providing opportunities for talented youth.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
          {[
            { icon: <Users className="w-5 h-5" />, value: '800+', label: 'Young Athletes' },
            { icon: <Trophy className="w-5 h-5" />, value: '15', label: 'Championships' },
            { icon: <Heart className="w-5 h-5" />, value: '24', label: 'Partner Teams' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 rounded-xl bg-secondary/30">
              <div className="inline-flex text-primary mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Media gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {clubMedia.map((item, index) => (
            <div
              key={item.id}
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
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
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <span className="text-xs text-primary font-medium uppercase">{item.category}</span>
                  <h4 className="text-foreground font-semibold">{item.title}</h4>
                </div>
              </div>
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="play-button-inner opacity-80 group-hover:opacity-100 transition-opacity">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Roster snippet */}
        <div className="max-w-2xl mx-auto mb-12">
          <h3 className="text-xl font-bold text-foreground text-center mb-6">Team Leadership</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {roster.map((member, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-card">
                <div className="w-12 h-12 rounded-full bg-primary/20 mx-auto mb-3 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="font-semibold text-foreground text-sm">{member.name}</div>
                <div className="text-xs text-muted-foreground">{member.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="/contact" className="cta-button">
            <Heart className="w-5 h-5" />
            Support the Club
          </a>
        </div>

        <Lightbox
          isOpen={lightboxOpen}
          currentItem={clubMedia[currentIndex] || null}
          items={clubMedia}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setCurrentIndex((prev) => Math.min(prev + 1, clubMedia.length - 1))}
          onPrev={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
        />
      </div>
    </section>
  );
};

export default ClubMedia;
