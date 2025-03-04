import "./Bio.css";
import { BioDescription } from "./BioDescriptions";

function Bio(props) {
    return (
        <div className='bio-holder'>
            <div className='left-bio'>
                <h1>Peter Hoppe</h1>
            </div>
            <div className='right-bio'>  
                <BioDescription focus={props.focus} />
            </div>        
      </div>
    )
}

export default Bio;

