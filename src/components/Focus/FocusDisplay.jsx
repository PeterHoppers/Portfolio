import './FocusDisplay.css'
import ProjectCollection from "../Project/ProjectCollection";
import ProjectDisplay from '../Project/ProjectDisplay';
import { useState } from 'react';

function FocusDisplay(props) {
    const [projectDisplayed, setProject] = useState(null);

    const updateProject = (selectedProject) => {
        setProject(selectedProject);

        const rootElement = document.getElementById("root");        
        if (selectedProject == null) {
            rootElement.classList.remove("modal-open");
        } else {
            rootElement.classList.add("modal-open");            
        }

        const header = document.getElementsByTagName("header")[0];
        console.log(header);
        header.scrollIntoView();
    }

    return (
        <section className="focus-display">
            <h2>Project Examples</h2>
            <div className="focus-display__holder">
                <ProjectCollection focus={props.focus} updateProject={updateProject}/>
            </div>
            <ProjectDisplay currentProject = {projectDisplayed} resetProject = {() => updateProject(null)}/>            
        </section>
    );
}

export default FocusDisplay;