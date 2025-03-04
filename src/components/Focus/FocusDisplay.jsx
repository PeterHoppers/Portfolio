import './FocusDisplay.css'
import ProjectCollection from "../Project/ProjectCollection";

function FocusDisplay(props) {
    return (
        <section className="focus-display">
            <h2>Project Examples</h2>
            <div className="focus-display__holder">
                <ProjectCollection focus={props.focus}/>
            </div>
        </section>
    );
}

export default FocusDisplay;