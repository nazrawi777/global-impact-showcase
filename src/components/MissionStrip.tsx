import { Building2, Heart, Users, Target } from 'lucide-react';

const MissionStrip = () => {
  return (
    <section id="about" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Target className="w-4 h-4" />
            Our Mission
          </div>
          <h2 className="section-title">Building More Than Structures</h2>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-10 mb-10">
          <p className="text-foreground/90 text-lg md:text-xl leading-relaxed text-center">
            At Global General Construction Company, we believe our responsibility extends beyond 
            building structures. Through our comprehensive social welfare programs, we're 
            <span className="text-primary font-semibold"> investing in communities</span>, 
            <span className="text-primary font-semibold"> nurturing talent</span>, and 
            <span className="text-primary font-semibold"> creating pathways to opportunity</span> for 
            those who need it most.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
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
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionStrip;
