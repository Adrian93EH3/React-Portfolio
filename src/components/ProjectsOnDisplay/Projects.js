import React from 'react';

const Projects = ({imageSrc, title, link, gitHubLink}) => {
  return (
    <>
          <img src={imageSrc} alt="project_screenshot" className="imgOne" />
          <div className="slider-info">
            <h1 className="project-title">{title}</h1>
            <a target="_blank" rel='noopener noreferrer' href={link}><button className='web-link-btn'>Deployed Site</button> </a>
            <a target="_blank" rel='noopener noreferrer' href={gitHubLink}><button className='web-link-btn'>GitHub Link</button> </a>
          </div>
        </>
  )
}

export default Projects