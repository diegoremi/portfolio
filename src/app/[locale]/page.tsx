import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ScrollReveal from '@/components/ScrollReveal';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <Experience />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <Skills />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <Projects />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <Contact />
      </ScrollReveal>
    </>
  );
}
