import { Projects } from "../../lib/projects";
import ProjectButton from "./ProjectButton";

function ProjectCollection(props) {
    const category = props.focus;
    const projectsInCategory = Projects.filter(x => x.category.includes(category));
    const amountToDisplay = (props.amount) ? props.amount : projectsInCategory.length;
    const projectsToDisplay = projectsInCategory.slice(0, amountToDisplay);

    return (
        <>
           {projectsToDisplay.map(project => {
                return <ProjectButton key={project.name + props.category} imageSrc={project.coverArt} projectSetter={() => props.updateProject(project)}/>
            })}    
        </>
    );
}

export default ProjectCollection;