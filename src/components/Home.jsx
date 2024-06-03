import Hero from './Hero';
import Skills from './Skills';
import Projects from './Experience';
import AboutMe from './AboutMe';
import Contact from './Contact';
import FooterNav from './Footer';

export default function Home() {
    return (
        <>
            <Hero />
            <Projects />
            <Skills />
            <AboutMe />
            <Contact />
            <FooterNav />
        </>
    );
}
