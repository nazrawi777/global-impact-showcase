import { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useInView } from 'framer-motion';
import { Home, GraduationCap, Users, Clock } from 'lucide-react';

interface Counter {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

const counters: Counter[] = [
  {
    icon: <Home className="w-8 h-8" />,
    value: 500,
    suffix: '+',
    label: 'Homes Built',
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    value: 1200,
    suffix: '+',
    label: 'Students Supported',
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: 10000,
    suffix: '+',
    label: 'Families Served',
  },
  {
    icon: <Clock className="w-8 h-8" />,
    value: 50000,
    suffix: '+',
    label: 'Volunteer Hours',
  },
];

const SpringCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);
  
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    mass: 1
  });

  useEffect(() => {
    if (isInView) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        setDisplayValue(value);
        return;
      }
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
    return unsubscribe;
  }, [springValue]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(num >= 10000 ? 0 : 1) + 'K';
    }
    return num.toString();
  };

  return (
    <div ref={ref} className="counter-value mb-2">
      {formatNumber(displayValue)}{suffix}
    </div>
  );
};

const CounterItem = ({ counter, index }: { counter: Counter; index: number }) => {
  return (
    <motion.div 
      className="text-center p-6 rounded-xl bg-card hover:bg-secondary/50 transition-colors duration-300 group"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        boxShadow: "0 20px 40px hsl(38 92% 50% / 0.15)"
      }}
      aria-live="polite"
    >
      <motion.div 
        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {counter.icon}
      </motion.div>
      <SpringCounter value={counter.value} suffix={counter.suffix} />
      <div className="text-muted-foreground font-medium">
        {counter.label}
      </div>
    </motion.div>
  );
};

const ImpactCounters = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Impact in Numbers</h2>
          <p className="section-subtitle mx-auto mt-4">
            Measurable results from years of dedicated community service
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {counters.map((counter, index) => (
            <CounterItem key={counter.label} counter={counter} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactCounters;
