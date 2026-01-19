import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, Heart, Users, Target } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './animations/MotionComponents';

const pillars = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'Sustainable Impact',
    description: 'Every project is designed for lasting community benefit, not just immediate results.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'People First',
    description: 'We measure success by lives changed, families supported, and futures built.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Together We Build',
    description: 'Our volunteers, partners, and communities work hand-in-hand to create change.',
  },
];

const MissionStrip = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section id="about" className="py-20 px-4 bg-card/30 relative overflow-hidden" ref={sectionRef}>
      {/* Parallax background decoration */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY, opacity }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
      </motion.div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <FadeIn className="text-center mb-12">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Target className="w-4 h-4" />
            Our Mission
          </motion.div>
          <h2 className="section-title">Building More Than Structures</h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <motion.div 
            className="bg-card rounded-2xl p-8 md:p-10 mb-10"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-foreground/90 text-lg md:text-xl leading-relaxed text-center">
              At Global General Construction Company, we believe our responsibility extends beyond 
              building structures. Through our comprehensive social welfare programs, we're 
              <motion.span 
                className="text-primary font-semibold"
                whileHover={{ scale: 1.05 }}
                style={{ display: 'inline-block' }}
              > investing in communities</motion.span>, 
              <motion.span 
                className="text-primary font-semibold"
                whileHover={{ scale: 1.05 }}
                style={{ display: 'inline-block' }}
              > nurturing talent</motion.span>, and 
              <motion.span 
                className="text-primary font-semibold"
                whileHover={{ scale: 1.05 }}
                style={{ display: 'inline-block' }}
              > creating pathways to opportunity</motion.span> for 
              those who need it most.
            </p>
          </motion.div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
          {pillars.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="text-center p-6 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default MissionStrip;
