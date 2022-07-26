import React from 'react';
import Navbar from '../Navbar/Navbar';
import Projects from '../ProjectsOnDisplay/Projects';

function MainPage() {
    return (
        <div>
            <Navbar />
            {/* <Hero page="mainPage" /> */}
            <Projects
                imageSrc={""}
                title={"Car Dealership"}
                link={"https://emilyleonella.github.io/index.html"}
                gitHubLink={"https://github.com/Emilyleonella/Emilyleonella.github.io"}
            />
        </div>
    )
};

export default MainPage;