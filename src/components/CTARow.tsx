import { motion } from 'framer-motion';
import { Heart, Users, Handshake, Trophy } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './animations/MotionComponents';

const ctas = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Volunteer',
    description: 'Join our team and make a hands-on difference in your community.',
    link: '/contact',
    primary: false,
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Donate',
    description: 'Your contribution directly funds housing, education, and youth programs.',
    link: '/contact',
    primary: true,
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: 'Partner',
    description: 'Collaborate with us on CSR initiatives and community projects.',
    link: '/contact',
    primary: false,
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'Support Club',
    description: 'Help us develop the next generation of athletes and leaders.',
    link: '/contact',
    primary: false,
  },
];

const CTARow = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/50 overflow-hidden">
      <div className="container mx-auto">
        <FadeIn className="text-center mb-12">
          <h2 className="section-title">Join Our Movement</h2>
          <p className="section-subtitle mx-auto mt-4">
            There are many ways to make a difference. Choose how you'd like to get involved.
          </p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {ctas.map((cta, index) => (
            <StaggerItem key={cta.title}>
              <motion.a
                href={cta.link}
                className={`group block p-6 rounded-2xl h-full ${
                  cta.primary 
                    ? 'bg-gradient-primary text-primary-foreground' 
                    : 'bg-card hover:bg-secondary/50'
                }`}
                style={{ 
                  boxShadow: cta.primary ? 'var(--shadow-glow)' : 'var(--shadow-card)'
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: cta.primary 
                    ? '0 0 60px hsl(38 92% 50% / 0.4)' 
                    : '0 20px 40px hsl(220 30% 5% / 0.4)'
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 ${
                    cta.primary 
                      ? 'bg-primary-foreground/20' 
                      : 'bg-primary/10'
                  }`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={cta.primary ? 'text-primary-foreground' : 'text-primary'}>
                    {cta.icon}
                  </div>
                </motion.div>
                
                <h3 className={`text-xl font-bold mb-2 ${
                  cta.primary ? 'text-primary-foreground' : 'text-foreground'
                }`}>
                  {cta.title}
                </h3>
                
                <p className={`text-sm ${
                  cta.primary ? 'text-primary-foreground/80' : 'text-muted-foreground'
                }`}>
                  {cta.description}
                </p>
                
                <motion.div 
                  className={`mt-4 flex items-center gap-2 text-sm font-semibold ${
                    cta.primary ? 'text-primary-foreground' : 'text-primary'
                  }`}
                  whileHover={{ x: 5 }}
                >
                  Get Started
                  <motion.span 
                    className="text-lg"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default CTARow;
