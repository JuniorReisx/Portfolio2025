import { About } from "../../sections/About";
import { WorkExperience } from "../../sections/Experience";
import { Hero } from "../../sections/Hero";
import { Projects } from "../../sections/Projects";

export function Home() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
    </main>
  );
}
