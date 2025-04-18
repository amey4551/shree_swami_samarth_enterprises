import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MaterialsSection from "@/components/MaterialsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MaterialsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <WhatsAppFloat />
      <Footer />
    </>
  );
};

export default Home;
