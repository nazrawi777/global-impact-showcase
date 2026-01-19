import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Eye, Volume2, VolumeX } from 'lucide-react';

interface MediaCardProps {
  id: string;
  type: 'image' | 'video';
  src: string;
  thumbnail: string;
  title: string;
  category: string;
  size?: 'small' | 'medium' | 'large';
  onClick: () => void;
}

const MediaCard = ({ 
  id, 
  type, 
  src, 
  thumbnail, 
  title, 
  category, 
  size = 'medium',
  onClick 
}: MediaCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [imageError, setImageError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const sizeClasses = {
    small: 'row-span-20',
    medium: 'row-span-25',
    large: 'row-span-35',
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (type === 'video' && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (type === 'video' && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const fallbackImage = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600';

  return (
    <motion.div
      className={`media-card cursor-pointer ${sizeClasses[size]}`}
      style={{ gridRowEnd: `span ${size === 'large' ? 35 : size === 'medium' ? 25 : 20}` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View ${title}`}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      whileHover={{ 
        scale: 1.03,
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          boxShadow: isHovered ? "0 0 40px hsl(38 92% 50% / 0.25)" : "0 0 0px hsl(38 92% 50% / 0)"
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Media content */}
      {type === 'video' ? (
        <>
          <video
            ref={videoRef}
            src={src}
            poster={thumbnail}
            className="w-full h-full object-cover"
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
          />
          
          {/* Mute toggle for videos */}
          {isHovered && (
            <motion.button
              className="absolute bottom-16 right-3 p-2 rounded-full bg-secondary/80 hover:bg-secondary text-foreground z-30 transition-all"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </motion.button>
          )}
        </>
      ) : (
        <motion.img
          src={imageError ? fallbackImage : thumbnail}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={() => setImageError(true)}
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      )}

      {/* Play button overlay for videos */}
      {type === 'video' && !isHovered && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.div 
            className="play-button-inner"
            whileHover={{ scale: 1.15 }}
          >
            <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
          </motion.div>
        </div>
      )}

      {/* Hover overlay with info */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent flex flex-col justify-end p-4 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.span 
          className="text-xs font-medium text-primary uppercase tracking-wider mb-1"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
          transition={{ delay: 0.05 }}
        >
          {category}
        </motion.span>
        <motion.h3 
          className="text-foreground font-semibold text-lg line-clamp-2"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
          transition={{ delay: 0.1 }}
        >
          {title}
        </motion.h3>
        <motion.div 
          className="flex items-center gap-2 mt-2"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
          transition={{ delay: 0.15 }}
        >
          <span className="flex items-center gap-1 text-sm text-foreground/80">
            {type === 'video' ? (
              <>
                <Play className="w-4 h-4" /> Play
              </>
            ) : (
              <>
                <Eye className="w-4 h-4" /> View
              </>
            )}
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MediaCard;
