import { useState } from 'react';
import { motion } from 'framer-motion';
import ProgramCard from './ProgramCard';
import ProgramModal from './ProgramModal';

interface Program {
  id: string;
  image: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  fullDescription: string;
  gallery: string[];
}

const programs: Program[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?w=800',
    title: 'Affordable Housing Initiative',
    description: 'Building quality homes for families in need across underserved communities.',
    stat: '500+',
    statLabel: 'homes built',
    fullDescription: 'Our Affordable Housing Initiative has transformed the lives of over 500 families by providing safe, quality housing in underserved communities. Working alongside local organizations and volunteer builders, we construct energy-efficient homes that meet the highest standards of quality while remaining accessible to low-income families. Each home represents not just shelter, but a foundation for families to build their futures upon.',
    gallery: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600',
    ],
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    title: 'Education & Scholarships',
    description: 'Empowering the next generation through comprehensive educational support.',
    stat: '1,200+',
    statLabel: 'students supported',
    fullDescription: 'Our Education & Scholarships program provides comprehensive support to students from kindergarten through university. We offer full and partial scholarships, tutoring services, school supplies, and mentorship programs. By removing financial barriers to education, we empower young people to pursue their dreams and become future leaders in their communities. Our alumni network now includes doctors, engineers, teachers, and entrepreneurs.',
    gallery: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600',
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600',
    ],
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800',
    title: 'Community Outreach',
    description: 'Providing essential resources and support to families facing hardship.',
    stat: '10K+',
    statLabel: 'families served',
    fullDescription: 'Our Community Outreach program addresses immediate needs while building long-term resilience in our communities. We organize regular food drives, distribute essential supplies, provide emergency assistance, and connect families with vital resources. During crises, our rapid response team mobilizes to deliver aid where it\'s needed most. Our holistic approach ensures that families receive not just material support, but also counseling and pathways to self-sufficiency.',
    gallery: [
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600',
      'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600',
    ],
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
    title: 'Youth Sports Development',
    description: 'Using sports to teach life skills and create opportunities for young people.',
    stat: '800+',
    statLabel: 'youth athletes',
    fullDescription: 'Through our Youth Sports Development program, we use athletics as a vehicle for personal growth and community building. Our football club provides professional coaching, equipment, and facilities to young athletes who otherwise wouldn\'t have access. Beyond athletic skills, participants learn teamwork, discipline, and leadership. Many of our athletes have gone on to play professionally, while others have used sports scholarships to pursue higher education.',
    gallery: [
      'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600',
      'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const ProgramsSection = () => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  return (
    <section id="programs" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Programs</h2>
          <p className="section-subtitle mx-auto mt-4">
            Comprehensive initiatives creating lasting change in our communities
          </p>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {programs.map((program) => (
            <motion.div key={program.id} variants={itemVariants}>
              <ProgramCard
                {...program}
                onClick={() => setSelectedProgram(program)}
              />
            </motion.div>
          ))}
        </motion.div>

        <ProgramModal
          isOpen={!!selectedProgram}
          program={selectedProgram}
          onClose={() => setSelectedProgram(null)}
        />
      </div>
    </section>
  );
};

export default ProgramsSection;
