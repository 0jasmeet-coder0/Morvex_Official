import CinematicHero from "../components/CinematicHero";
import NewsSection from "../components/NewsSection";
import StudioSection from "../components/StudioSection";
import About from "../components/About";
import ProjectsGrid from "../components/ProjectsGrid";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <>

      {/* Hero stays immediate */}
      <CinematicHero />

      <Reveal>
        <NewsSection />
      </Reveal>

      <Reveal>
        <StudioSection />
      </Reveal>

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <ProjectsGrid />
      </Reveal>

    </>
  );
}