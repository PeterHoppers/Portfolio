import { useState } from 'react'
import './CategoryDisplay.css';
import { Categories} from '../../util.js';
import CategoryButton from './CategoryButton';
import CategoryContent from './CategoryContent.jsx';

const CategoryState = Object.freeze({
    Open: 0,
    Closed: 1,
    Closing: 2,
    Opening: 3
});

function CategoryDisplay(props) {
    const [category, setCategory] = useState(Categories.Games);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [categoryDisplayState, setDisplayState] = useState(CategoryState.Closed);
  
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

    let categoryDisplayClass = `category-display category-${category.toLowerCase()}`;

    if (categoryDisplayState == CategoryState.Open || categoryDisplayState == CategoryState.Opening) {
        categoryDisplayClass += " category-selected";
    }

    if (categoryDisplayState == CategoryState.Closing || categoryDisplayState == CategoryState.Opening) {
        categoryDisplayClass += " category-transitioning";
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
                    return <CategoryContent key={category} category={category}/>
                })}
            </div>
      </div>
    )
}

export default CategoryDisplay;