import Hero from './Hero';
import Skills from './Skills';
import Projects from './Experience';

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
        </>
    );
}
