import { Heart, Users, Handshake, Trophy } from 'lucide-react';

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
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Join Our Movement</h2>
          <p className="section-subtitle mx-auto mt-4">
            There are many ways to make a difference. Choose how you'd like to get involved.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ctas.map((cta, index) => (
            <a
              key={cta.title}
              href={cta.link}
              className={`group block p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in ${
                cta.primary 
                  ? 'bg-gradient-primary text-primary-foreground' 
                  : 'bg-card hover:bg-secondary/50'
              }`}
              style={{ 
                animationDelay: `${0.1 * index}s`,
                boxShadow: cta.primary ? 'var(--shadow-glow)' : 'var(--shadow-card)'
              }}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 ${
                cta.primary 
                  ? 'bg-primary-foreground/20' 
                  : 'bg-primary/10'
              }`}>
                <div className={cta.primary ? 'text-primary-foreground' : 'text-primary'}>
                  {cta.icon}
                </div>
              </div>
              
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
              
              <div className={`mt-4 flex items-center gap-2 text-sm font-semibold ${
                cta.primary ? 'text-primary-foreground' : 'text-primary'
              } group-hover:gap-3 transition-all`}>
                Get Started
                <span className="text-lg">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTARow;
