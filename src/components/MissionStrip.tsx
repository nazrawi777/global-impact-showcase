import { motion } from 'framer-motion';
import { Building2, Heart, Users, Target } from 'lucide-react';

const MissionStrip = () => {
  const items = [
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

  return (
    <section id="about" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Target className="w-4 h-4" />
            Our Mission
          </motion.div>
          <h2 className="section-title">Building More Than Structures</h2>
        </motion.div>

        <motion.div 
          className="bg-card rounded-2xl p-8 md:p-10 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          whileHover={{ 
            boxShadow: "0 20px 50px hsl(38 92% 50% / 0.1)"
          }}
        >
          <p className="text-foreground/90 text-lg md:text-xl leading-relaxed text-center">
            At Global General Construction Company, we believe our responsibility extends beyond 
            building structures. Through our comprehensive social welfare programs, we're 
            <span className="text-primary font-semibold"> investing in communities</span>, 
            <span className="text-primary font-semibold"> nurturing talent</span>, and 
            <span className="text-primary font-semibold"> creating pathways to opportunity</span> for 
            those who need it most.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl bg-secondary/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, type: "spring", stiffness: 100 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                backgroundColor: "hsl(220 15% 20% / 0.5)",
                boxShadow: "0 15px 40px hsl(38 92% 50% / 0.12)"
              }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionStrip;
