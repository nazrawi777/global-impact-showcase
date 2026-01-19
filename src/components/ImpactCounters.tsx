import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Home, GraduationCap, Users, Clock } from 'lucide-react';
import { FadeIn } from './animations/MotionComponents';

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

const AnimatedCounter = ({ counter, index }: { counter: Counter; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 30,
    duration: prefersReducedMotion ? 0 : undefined,
  });

  const displayValue = useTransform(springValue, (latest) => {
    if (latest >= 1000) {
      return (latest / 1000).toFixed(latest >= 10000 ? 0 : 1) + 'K';
    }
    return Math.floor(latest).toString();
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(counter.value);
    }
  }, [isInView, counter.value, springValue]);

  return (
    <motion.div 
      ref={ref}
      className="text-center p-6 rounded-xl bg-card hover:bg-secondary/50 transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ scale: 1.02, y: -5 }}
      aria-live="polite"
    >
      <motion.div 
        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4"
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: 'spring' }}
      >
        {counter.icon}
      </motion.div>
      <div className="counter-value mb-2 flex items-center justify-center">
        <motion.span>{displayValue}</motion.span>
        <span>{counter.suffix}</span>
      </div>
      <div className="text-muted-foreground font-medium">
        {counter.label}
      </div>
    </motion.div>
  );
};

const ImpactCounters = () => {
  const sectionRef = useRef(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/30 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto">
        <FadeIn className="text-center mb-12">
          <h2 className="section-title">Our Impact in Numbers</h2>
          <p className="section-subtitle mx-auto mt-4">
            Measurable results from years of dedicated community service
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {counters.map((counter, index) => (
            <AnimatedCounter key={counter.label} counter={counter} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactCounters;
