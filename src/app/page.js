import BannerSection from "./component/BannerSection";
import FluidSection from "./component/FluidSection";
import FunctionalitySection from "./component/FunctionalitySection";
import GraphSection from "./component/GraphSection";
import HeroSection from "./component/HeroSection";

export default function Page() {
  return (
    <>
      <FluidSection />
      <HeroSection />
      <FunctionalitySection />
      <GraphSection />
      <BannerSection />
    </>
  );
}
