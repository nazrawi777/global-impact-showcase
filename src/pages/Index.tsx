import MediaMosaic from '@/components/MediaMosaic';
import FeaturedCarousel from '@/components/FeaturedCarousel';
import ProgramsSection from '@/components/ProgramsSection';
import ImpactCounters from '@/components/ImpactCounters';
import ClubMedia from '@/components/ClubMedia';
import MissionStrip from '@/components/MissionStrip';
import CTARow from '@/components/CTARow';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta - would be in document head in production */}
      <title>Social Welfare | Global General Construction Company</title>
      
      {/* Main content - no hero, starts with media mosaic */}
      <main>
        {/* Lead Media Mosaic - immediate visual impact */}
        <MediaMosaic />
        
        {/* Featured Stories Carousel */}
        <FeaturedCarousel />
        
        {/* Programs Snapshot */}
        <ProgramsSection />
        
        {/* Impact Counters */}
        <ImpactCounters />
        
        {/* Football Club Section */}
        <ClubMedia />
        
        {/* Mission / About Strip */}
        <MissionStrip />
        
        {/* Call-to-Action Row */}
        <CTARow />
      </main>
    </div>
  );
};

export default Index;
