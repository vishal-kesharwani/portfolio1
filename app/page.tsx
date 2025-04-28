import Contact from "@/components/contact";
import Achievements  from "@/components/achievements";
import Education from "@/components/education";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <div className="flex flex-col items-center px-4">
        <SectionDivider />
        <Projects />
        <Skills />
        <Achievements />
        <Education />
        <Contact />
      </div>
    </main>
  );
}
