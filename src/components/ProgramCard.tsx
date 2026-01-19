import { ArrowRight } from 'lucide-react';

interface ProgramCardProps {
  image: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  onClick: () => void;
}

const ProgramCard = ({ image, title, description, stat, statLabel, onClick }: ProgramCardProps) => {
  return (
    <div 
      className="group bg-card rounded-xl overflow-hidden hover-lift cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
        
        {/* Stat badge */}
        <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm font-bold">
          {stat} <span className="font-normal opacity-80">{statLabel}</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
          Learn More <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </div>
  );
};

export default ProgramCard;
