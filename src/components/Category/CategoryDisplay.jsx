import { useState } from 'react'
import './CategoryDisplay.css';
import { Categories, CategoryDisplayed } from '../../lib/definitions.js';
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

    const categoryKeys = Object.keys(CategoryDisplayed);
  
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

        setTimeout(() => {
            document.getElementsByClassName("project-content")[0].scrollIntoView({ behavior: "smooth"}); //so that it focuses on the modal
        }, 10);
    }

    const clearProject = () => {
        document.getElementsByClassName("category-holder")[0].scrollIntoView({ behavior: "smooth"}); //so that it focuses on the modal

        setTimeout(() => {
            setProject(null);
        }, 500);
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
                {Object.keys(CategoryDisplayed).map(category => {
                    return <CategoryButton key={category} text={Categories[category]} clickHandler={() => updateCategory(category)}/>
                })}
            </aside>
            <div className={isTransitioning ? 'category-content-holder category-transitioning' : `category-content-holder`} onTransitionEnd={() => {
                    setIsTransitioning(false);
                }}>
                {Object.keys(CategoryDisplayed).map(category => {                    
                    return <CategoryContent key={category} category={category} updateProject={updateProject}/>
                })}
            </div>
            
            <ProjectDisplay currentProject = {projectDisplayed} resetProject = {() => clearProject()}/>            
      </div>
    )
}

export default CategoryDisplay;