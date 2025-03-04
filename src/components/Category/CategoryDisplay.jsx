import { useState } from 'react'
import './CategoryDisplay.css';
import { Categories } from '../../lib/definitions.js';
import CategoryButton from './CategoryButton';
import CategoryContent from './CategoryContent.jsx';
import ProjectDisplay from "../Project/ProjectDisplay.jsx";

const CategoryState = Object.freeze({
    Open: 0,
    Closed: 1,
    Closing: 2,
    Opening: 3
});

function CategoryDisplay() {
    const [category, setCategory] = useState(Categories.Games);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [categoryDisplayState, setDisplayState] = useState(CategoryState.Closed);
    const [projectDisplayed, setProject] = useState(null);
  
    const updateCategory = (selectedCategory) => {        
        if (selectedCategory == category && categoryDisplayState == CategoryState.Open) {
            setDisplayState(CategoryState.Closing);
        } else {            
            setCategory(selectedCategory);
            
            if (categoryDisplayState == CategoryState.Closed) {
                setDisplayState(CategoryState.Opening);
            } else {                
                setIsTransitioning(true);
            }
        }
    }

    const updateProject = (selectedProject) => {
        setProject(selectedProject);
        document.getElementsByClassName("category-display")[0].scrollTo(0, 0); //so that it focuses on the modal
    }

    let categoryDisplayClass = `category-display category-${category.toLowerCase()}`;

    if (categoryDisplayState == CategoryState.Open || categoryDisplayState == CategoryState.Opening) {
        categoryDisplayClass += " category-selected";
    }

    if (categoryDisplayState == CategoryState.Closing || categoryDisplayState == CategoryState.Opening) {
        categoryDisplayClass += " category-transitioning";
    }

    if (projectDisplayed != null) {
        categoryDisplayClass += " category-project-display";
    }

    return (
        <div className={categoryDisplayClass} onTransitionEnd={(event) => {
            if(event.target.classList.contains("category-display")) {
                if (categoryDisplayState == CategoryState.Opening) {
                    setDisplayState(CategoryState.Open);
                } else if (categoryDisplayState == CategoryState.Closing) {
                    setDisplayState(CategoryState.Closed);
                }
            }                
            }}>            
            <aside className='category-holder'>
                {Object.keys(Categories).map(category => {
                    return <CategoryButton key={category} text={Categories[category]} clickHandler={() => updateCategory(category)}/>
                })}
            </aside>
            <div className={isTransitioning ? 'category-content-holder category-transitioning' : `category-content-holder`} onTransitionEnd={() => {
                    setIsTransitioning(false);
                }}>
                {Object.keys(Categories).map(category => {                    
                    return <CategoryContent key={category} category={category} updateProject={updateProject}/>
                })}
            </div>
            
            <ProjectDisplay currentProject = {projectDisplayed} resetProject = {() => setProject(null)}/>            
      </div>
    )
}

export default CategoryDisplay;