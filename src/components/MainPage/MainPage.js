import React from 'react';
import Navbar from '../Navbar/Navbar';
import Projects from '../ProjectsOnDisplay/Projects';
import carDealership from '../../assets/images/carDealership.png';
import weatherApp from '../../assets/images/weatherApp.png';
import indecisiveCook from '../../assets/images/indecisiveCook.png';

function MainPage() {
    return (
        <div>
            <Navbar />
            <Projects
                imageSrc={carDealership}
                title={"Car Dealership"}
                link={"https://dry-inlet-97099.herokuapp.com/"}
                gitHubLink={"https://github.com/Adrian93EH3/CarDealership"}
            />
            <Projects
                imageSrc={weatherApp}
                title={"Weather App"}
                link={"https://shielded-shore-16226.herokuapp.com/"}
                gitHubLink={"https://github.com/Adrian93EH3/Weather-App-React"}
            />
            <Projects
                imageSrc={indecisiveCook}
                title={"Indecisive Cook"}
                link={"https://adrian93eh3.github.io/Indecisive-Cook/"}
                gitHubLink={"https://github.com/Adrian93EH3/Indecisive-Cook"}
            />
        </div>
    )
};

export default MainPage;