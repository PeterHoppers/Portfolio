import './CategoryButton.css'
function CategoryButton(props) {
    return (
      <>
        <button className={`category category-style-${props.text.toLowerCase()}`} onClick={props.clickHandler}>
            {props.text}
        </button>
      </>
    )
}

export default CategoryButton;