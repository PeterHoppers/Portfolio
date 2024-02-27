import { Carousel } from 'react-responsive-carousel';
import { Project } from '../../projects';
import ProjectDescription from './ProjectDescription';
import "./ProjectContent.css";

function ProjectContent(props) {
    /**
     * @type{Project}
     */    
    const project = props.project;
    return (
        <div className="project-content">
            <h2>{project.name}</h2>
            <p className='project-content__description'>{project.description}</p>
            {
                project.thumbnails && 
                    <div className='project-content__carousel-holder'>
                        <Carousel>
                            {
                                project.thumbnails.map((thumbnail) => {
                                    return <div key={thumbnail.key}>
                                                <img src={`/Portfolio/Thumbnails/${project.name}/${thumbnail.src}`} alt={`${thumbnail.alt}`}/>
                                                <p className="legend">{`${thumbnail.alt}`}</p>
                                           </div>                                        
                                })
                            }
                        </Carousel>
                    </div>
            }
            {
                project.previewVideoURl &&
                <iframe src={`${project.previewVideoURl}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            }
            {
                project.viewText && 
                    <a href={`${project.viewURL}`} target='_blank'>{`${project.viewText}`}</a>
            }
            <ProjectDescription projectName = {project.name}/>
        </div>
    )
}

export default ProjectContent;