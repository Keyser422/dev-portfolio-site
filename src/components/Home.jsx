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
            <div>
                <Projects />
            </div>
            <div>
                <Skills />
            </div>
            <div>
                <AboutMe />
            </div>
            <div>
                <Contact />
            </div>
            <div>
                <FooterNav />
            </div>
        </>
    );
}
