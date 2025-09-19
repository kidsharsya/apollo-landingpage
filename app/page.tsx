import Navbar from '@/components/Navbar';
import BannerSection from '@/components/landingpage/bannerSection';
import FeatureSection from '@/components/landingpage/featureSection';
import WorksSection from '@/components/landingpage/worksSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <section>
        <BannerSection />
        <FeatureSection />
        <WorksSection />
      </section>
    </main>
  );
}
