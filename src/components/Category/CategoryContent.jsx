import "./CategoryContent.css";
import ProjectCollection from "../Project/ProjectCollection";

function CategoryContent(props) {
    return (
        <section className={`category-content category-style-${props.category.toLowerCase()}`}>
            <div className="category-content__holder">
                <ProjectCollection focus={props.category} updateProject={props.updateProject}/> 
            </div>
        </section>
    );
}

export default CategoryContent;