import { useState, useRef } from 'react';
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
    <div
      className={`media-card cursor-pointer ${sizeClasses[size]}`}
      style={{ gridRowEnd: `span ${size === 'large' ? 35 : size === 'medium' ? 25 : 20}` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View ${title}`}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
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
            <button
              className="absolute bottom-16 right-3 p-2 rounded-full bg-secondary/80 hover:bg-secondary text-foreground z-30 transition-all"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          )}
        </>
      ) : (
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
          loading="lazy"
        />
      )}

      {/* Play button overlay for videos */}
      {type === 'video' && !isHovered && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="play-button-inner">
            <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>
      )}

      {/* Hover overlay with info */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent flex flex-col justify-end p-4 z-20 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
          {category}
        </span>
        <h3 className="text-foreground font-semibold text-lg line-clamp-2">{title}</h3>
        <div className="flex items-center gap-2 mt-2">
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
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
