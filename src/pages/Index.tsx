import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Teachers from "@/components/Teachers";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Courses />
      <Teachers />
    </div>
  );
};

export default Index;
