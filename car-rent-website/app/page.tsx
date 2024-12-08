import Footer from '@/components/Footer';
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import PopularCars from "@/components/PopularCars";
import FilterSection from "@/components/FilterSection";
import RecommendationCars from "@/components/RecommendationCars";


function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FilterSection />
      <PopularCars />
      <RecommendationCars />
      <Footer />
    </div>

  );
}

export default App ;