import React from 'react';
import Header1 from './header1';
import About from './about';
import Skills from './skills';

import Projects from './projects';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Education from "./education";
import Contact from "./contact";
import Footer1 from './footer1';

function App() {
    return (
        <>
            <Header1 />
            <main className="pt-5">
                <section id="about">
                    <About />
                </section>
                <section id="skills">
                    <Skills />
                </section>

                <section id="education">
                    <Education />
                </section>
                <section id="projects">
                    <Projects />
                </section>

                <section id="contact">
                    <Contact />
                </section>

            </main>
            <Footer1 />
        </>
    );
}

export default App;