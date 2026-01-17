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
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
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
              className="absolute bottom-16 right-3 p-2 rounded-full bg-secondary/80 hover:bg-secondary text-foreground z-30"
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
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.7 }}
        />
      )}

      {/* Play button overlay for videos */}
      {type === 'video' && !isHovered && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.div 
            className="play-button-inner"
            whileHover={{ scale: 1.1 }}
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
          animate={isHovered ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
        >
          {category}
        </motion.span>
        <motion.h3 
          className="text-foreground font-semibold text-lg line-clamp-2"
          initial={{ y: 10, opacity: 0 }}
          animate={isHovered ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.15 }}
        >
          {title}
        </motion.h3>
        <motion.div 
          className="flex items-center gap-2 mt-2"
          initial={{ y: 10, opacity: 0 }}
          animate={isHovered ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
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
