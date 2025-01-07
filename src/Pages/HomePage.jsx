import React from 'react';

import FrontPage from './Sections/FrontPage';
import AboutMePage from './Sections/AboutMePage'
import Education from './Sections/Education'
import Abilities from './Sections/Abilities'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'
import Navbar from './Components/Navbar';
import Certifications from './Sections/Certifications';
import DownloadResume from './Components/DownloadResume';
import Achievements from './Sections/Achievements';
import Experience from './Sections/Experience';
import Blogs from './Sections/Blogs';

const HomePage = () => {
    return (
        <>
            <FrontPage />
            <Navbar />
            <AboutMePage />
            <Education />
            <Abilities />
            <Projects />
            <Experience />
            <Achievements />
            <Certifications />
            <Blogs />
            <Contact />
            <DownloadResume />
        </>
    )
}

export default HomePage;
