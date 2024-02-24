function ProjectButton(props) {  
    return (
      <>
        <input type='image' src={`/Portfolio/CoverArt/${props.imageSrc}`} onClick={props.projectSetter}/>
      </>
    )
}

export default ProjectButton;