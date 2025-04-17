import { About } from "../../sections/About";
import { Contact } from "../../sections/Contact";
import { WorkExperience } from "../../sections/Experience";
import { Hero } from "../../sections/Hero";
import { Projects } from "../../sections/Projects";
import { Technologies } from "../../sections/Technologies";

export function Home() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
      <Technologies/>
      <Contact/>
    </main>
  );
}
