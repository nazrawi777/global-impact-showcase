import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Download, Share2 } from 'lucide-react';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  thumbnail: string;
  title: string;
  category: string;
  description?: string;
}

interface LightboxProps {
  isOpen: boolean;
  currentItem: MediaItem | null;
  items: MediaItem[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox = ({ isOpen, currentItem, items, onClose, onNext, onPrev }: LightboxProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
          onNext();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
      }
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown, isOpen]);

  if (!isOpen || !currentItem) return null;

  const currentIndex = items.findIndex((item) => item.id === currentItem.id);

  return (
    <div 
      className="lightbox-overlay animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Media lightbox"
    >
      {/* Close button - highest z-index and outside content area */}
      <button
        className="absolute top-4 right-4 p-3 rounded-full bg-secondary/80 hover:bg-secondary text-foreground transition-colors z-[60]"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-secondary/80 hover:bg-secondary text-foreground transition-colors z-[60] disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        disabled={currentIndex === 0}
        aria-label="Previous item"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-secondary/80 hover:bg-secondary text-foreground transition-colors z-[60] disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        disabled={currentIndex === items.length - 1}
        aria-label="Next item"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div 
        className="max-w-5xl max-h-[85vh] mx-4 animate-scale-in relative z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {currentItem.type === 'video' ? (
          <div className="relative bg-card rounded-xl overflow-hidden">
            <video
              src={currentItem.src}
              className="w-full max-h-[70vh] object-contain"
              controls
              autoPlay
              aria-label={currentItem.title}
            >
              <track kind="captions" src="" label="English" />
              Your browser does not support video playback.
            </video>
          </div>
        ) : (
          <img
            src={currentItem.src}
            alt={currentItem.title}
            className="w-full max-h-[70vh] object-contain rounded-xl"
          />
        )}

        {/* Caption and actions */}
        <div className="mt-4 p-4 bg-card rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{currentItem.title}</h3>
            <p className="text-sm text-muted-foreground">{currentItem.description || currentItem.category}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {currentIndex + 1} / {items.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
