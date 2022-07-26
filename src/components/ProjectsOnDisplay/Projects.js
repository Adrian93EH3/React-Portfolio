import React from 'react';
// import './Projects.css';

const Projects = ({imageSrc, title, link, gitHubLink}) => {
  return (
    <>
          <img src={imageSrc} alt="project_screenshot" className="images" />
          <div>
            <h1 className="project-title">{title}</h1>
            <a target="_blank" rel='noopener noreferrer' href={link}><button className='web-link-btn'>Deployed Site</button> </a>
            <a target="_blank" rel='noopener noreferrer' href={gitHubLink}><button className='web-link-btn'>GitHub Link</button> </a>
          </div>
        </>
  )
}

export default Projects