import { useState, useEffect, useRef } from 'react';
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

const useCountAnimation = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setCount(end);
      return;
    }

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return { count, ref };
};

const CounterItem = ({ counter }: { counter: Counter }) => {
  const { count, ref } = useCountAnimation(counter.value);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(num >= 10000 ? 0 : 1) + 'K';
    }
    return num.toString();
  };

  return (
    <div 
      ref={ref}
      className="text-center p-6 rounded-xl bg-card hover:bg-secondary/50 transition-colors duration-300"
      aria-live="polite"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
        {counter.icon}
      </div>
      <div className="counter-value mb-2">
        {formatNumber(count)}{counter.suffix}
      </div>
      <div className="text-muted-foreground font-medium">
        {counter.label}
      </div>
    </div>
  );
};

const ImpactCounters = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Impact in Numbers</h2>
          <p className="section-subtitle mx-auto mt-4">
            Measurable results from years of dedicated community service
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {counters.map((counter, index) => (
            <div
              key={counter.label}
              className="animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CounterItem counter={counter} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactCounters;
