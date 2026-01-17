import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Users, Trophy, Heart } from 'lucide-react';
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
  
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="club" className="py-20 px-4 bg-card/50 relative overflow-hidden" ref={sectionRef}>
      {/* Parallax background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
      </motion.div>
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <FadeIn className="text-center mb-12">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Trophy className="w-4 h-4" />
            Global FC Youth Club
          </motion.div>
          <h2 className="section-title">Building Champions On & Off the Field</h2>
          <p className="section-subtitle mx-auto mt-4">
            Our football program uses sport to teach discipline, teamwork, and leadership while providing opportunities for talented youth.
          </p>
        </FadeIn>

        {/* Stats row */}
        <StaggerContainer className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12" staggerDelay={0.1}>
          {[
            { icon: <Users className="w-5 h-5" />, value: '800+', label: 'Young Athletes' },
            { icon: <Trophy className="w-5 h-5" />, value: '15', label: 'Championships' },
            { icon: <Heart className="w-5 h-5" />, value: '24', label: 'Partner Teams' },
          ].map((stat, index) => (
            <StaggerItem key={index}>
              <motion.div 
                className="text-center p-4 rounded-xl bg-secondary/30"
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <motion.div 
                  className="inline-flex text-primary mb-2"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Media gallery */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12" staggerDelay={0.08}>
          {clubMedia.map((item, index) => (
            <StaggerItem key={item.id}>
              <motion.div
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <span className="text-xs text-primary font-medium uppercase">{item.category}</span>
                    <h4 className="text-foreground font-semibold">{item.title}</h4>
                  </div>
                </motion.div>
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="play-button-inner opacity-80 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Roster snippet */}
        <FadeIn delay={0.3} className="max-w-2xl mx-auto mb-12">
          <h3 className="text-xl font-bold text-foreground text-center mb-6">Team Leadership</h3>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.1}>
            {roster.map((member, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="text-center p-4 rounded-xl bg-card"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-primary/20 mx-auto mb-3 flex items-center justify-center"
                    whileHover={{ rotate: 10 }}
                  >
                    <Users className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div className="font-semibold text-foreground text-sm">{member.name}</div>
                  <div className="text-xs text-muted-foreground">{member.role}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.4} className="text-center">
          <motion.a 
            href="/contact" 
            className="cta-button inline-flex"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Heart className="w-5 h-5" />
            Support the Club
          </motion.a>
        </FadeIn>

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
