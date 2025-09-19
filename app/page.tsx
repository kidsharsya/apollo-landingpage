import Navbar from '@/components/Navbar';
import BannerSection from '@/components/landingpage/bannerSection';
import FeatureSection from '@/components/landingpage/featureSection';
import WorksSection from '@/components/landingpage/worksSection';
import PlansSection from '@/components/landingpage/plansSection';
import FAQSection from '@/components/landingpage/faqSection';
import CTASection from '@/components/landingpage/ctaSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="mb-24">
        <BannerSection />
        <FeatureSection />
        <WorksSection />
        <PlansSection />
        <FAQSection />
        <CTASection />
      </section>
      <Footer />
    </main>
  );
}
