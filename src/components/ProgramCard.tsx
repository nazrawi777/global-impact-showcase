import { motion } from 'framer-motion';
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
    <motion.div 
      className="group bg-card rounded-xl overflow-hidden cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      whileHover={{ 
        y: -12,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none z-10"
        initial={{ opacity: 0 }}
        whileHover={{ 
          opacity: 1,
          boxShadow: "0 20px 50px hsl(38 92% 50% / 0.2)"
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
        
        {/* Stat badge */}
        <motion.div 
          className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm font-bold"
          whileHover={{ scale: 1.05 }}
        >
          {stat} <span className="font-normal opacity-80">{statLabel}</span>
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <motion.span 
          className="inline-flex items-center gap-2 text-primary text-sm font-semibold"
          whileHover={{ x: 5 }}
        >
          Learn More 
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        </motion.span>
      </div>
    </motion.div>
  );
};

export default ProgramCard;
