import "./ProjectDisplay.css";
import ProjectContent from "./ProjectContent";
import closeButton from "../../assets/close.svg";

function ProjectDisplay(props) {  
    let projectDisplayClass = `project-display`;
    
    const isDisplaying = props.currentProject !== null;
    if (isDisplaying) {
        projectDisplayClass += " project-selected";
    }

    return (
        <div className={projectDisplayClass}>
            <section className="project-display__visual">
                {isDisplaying &&
                    <>                    
                       <ProjectContent project={props.currentProject}/>   
                       <input className="project-display__close-btn" type="image" src={closeButton} onClick={props.resetProject}/>                     
                    </>                    
                }
            </section>
        </div>
    )
}

export default ProjectDisplay;