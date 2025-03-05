import './FocusDisplay.css'
import ProjectCollection from "../Project/ProjectCollection";
import ProjectDisplay from '../Project/ProjectDisplay';
import { useState } from 'react';

function FocusDisplay(props) {
    const [projectDisplayed, setProject] = useState(null);

    const updateProject = (selectedProject) => {
        setProject(selectedProject);

        setTimeout(() => {
            document.getElementsByClassName("project-content")[0].scrollIntoView({ behavior: "smooth"}); //so that it focuses on the modal
        }, 10);
    }

    const clearProject = () => {
        document.getElementsByClassName("focus-display")[0].scrollIntoView({ behavior: "smooth"}); //so that it focuses on the modal

        setTimeout(() => {
            setProject(null);
        }, 500);
    }

    return (
        <section className="focus-display">
            <h2 className="focus-display__title">Project Examples</h2>
            <div className="focus-display__holder">
                <ProjectCollection focus={props.focus} updateProject={updateProject}/>
            </div>
            <ProjectDisplay currentProject = {projectDisplayed} resetProject = {() => clearProject()}/>            
        </section>
    );
}

export default FocusDisplay;