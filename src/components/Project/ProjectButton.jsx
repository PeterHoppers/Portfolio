function ProjectButton(props) {  
    return (
      <>
        <input type='image' src={`/CoverArt/${props.imageSrc}`} onClick={props.projectSetter}/>
      </>
    )
}

export default ProjectButton;