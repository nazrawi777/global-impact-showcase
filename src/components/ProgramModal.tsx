import { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';

interface Program {
  id: string;
  image: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  fullDescription: string;
  gallery: string[];
}

interface ProgramModalProps {
  isOpen: boolean;
  program: Program | null;
  onClose: () => void;
}

const ProgramModal = ({ isOpen, program, onClose }: ProgramModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !program) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'hsl(220 20% 8% / 0.9)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div 
        className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header image */}
        <div className="relative aspect-video">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-secondary/80 hover:bg-secondary text-foreground transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="absolute bottom-6 left-6 right-6">
            <div className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-3">
              {program.stat} {program.statLabel}
            </div>
            <h2 className="text-3xl font-bold text-foreground">{program.title}</h2>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 md:p-8">
          <p className="text-foreground/90 text-lg leading-relaxed mb-8">
            {program.fullDescription}
          </p>
          
          {/* Mini gallery */}
          <h3 className="text-xl font-bold text-foreground mb-4">Program Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {program.gallery.map((img, index) => (
              <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={img}
                  alt={`${program.title} gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="cta-button justify-center">
              Get Involved <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/contact" className="cta-button-outline justify-center">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramModal;
