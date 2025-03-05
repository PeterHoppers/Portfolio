import "./ProjectButton.css";

function ProjectButton(props) {  
    return (
      <>
        <input className="project-button" type='image' src={`/Portfolio/CoverArt/${props.imageSrc}`} onClick={props.projectSetter}/>
      </>
    )
}

export default ProjectButton;