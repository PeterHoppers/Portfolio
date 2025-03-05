import "./CategoryContent.css";
import ProjectCollection from "../Project/ProjectCollection";
import { CategoryDisplayAmount } from "../../lib/definitions";

function CategoryContent(props) {
    return (
        <section className={`category-content category-style-${props.category.toLowerCase()}`}>
            <div className="category-content__holder">
                <ProjectCollection focus={props.category} updateProject={props.updateProject} amount={CategoryDisplayAmount}/> 
            </div>
        </section>
    );
}

export default CategoryContent;