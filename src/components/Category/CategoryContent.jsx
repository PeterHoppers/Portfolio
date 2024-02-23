import "./CategoryContent.css";
import ProjectButton from "../Project/ProjectButton";
import {Projects} from "../../projects.js";

function CategoryContent(props) {
    return (
        <section className={`category-content category-style-${props.category.toLowerCase()}`}>
            <div className="category-content__holder">
                {Projects.map(project => {
                    if (project.category.includes(props.category)) {
                        return <ProjectButton key={project.name + props.category} imageSrc={project.coverArt} projectSetter={() => props.updateProject(project)}/>
                    } else {
                        return;
                    }
                })}                
            </div>
        </section>
    );
}

export default CategoryContent;