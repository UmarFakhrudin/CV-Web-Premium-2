/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Languages from './components/Languages';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Particles from './components/Particles';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <Particles />
      <Navbar />
      
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Languages />
        <Hobbies />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
