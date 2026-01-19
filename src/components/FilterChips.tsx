import { motion } from 'framer-motion';

interface FilterChipsProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterChips = ({ filters, activeFilter, onFilterChange }: FilterChipsProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {filters.map((filter, index) => (
        <motion.button
          key={filter}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: {
              delay: index * 0.05,
              type: "spring" as const,
              stiffness: 300,
              damping: 20,
            }
          }}
          className={`filter-chip ${activeFilter === filter ? 'active' : ''}`}
          onClick={() => onFilterChange(filter)}
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.92 }}
        >
          {filter}
        </motion.button>
      ))}
    </div>
  );
};

export default FilterChips;
