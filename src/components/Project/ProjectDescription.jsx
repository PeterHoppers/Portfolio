import './ProjectDescription.css';

function ProjectDescription(props) {  
    const projectName = props.projectName;
    return (
        <div className='project-description'>
            {projectName === "CHARGED" &&
                <>
                    <p>Role: Lead Designer, Product Owner</p>
                    <h3>Main Skills:</h3>
                    <ul>
                        <li>Lead an interdisciplinary team of eleven and facilitated communication to establish goals and expectations through Trello</li>
                        <li>Produced a build online and gathered feedback through the G Suite</li>
                        <li>Developed the product through two-week sessions with planning and reviews before and after each session</li>
                    </ul>
                    <h3>Backstory:</h3>
                    <span>We needed to create a game in a month since the other game we were working out gained complications due to external forces. I had this idea for a game in the back of my mind for a while now: pushing and pulling a particle from one end to another through points you placed. I learned how to communicate my own vision and to use multiple mediums in order to get it across. Some people preferred me drawing out how I wanted some features to work while others preferred a bullet point of features that it needed to accomplish. It was also neat to see the progression between an idea in your head to see it all come together in the end.</span>
                </>
            }
            {projectName === "In-Headset Navigation" &&
                <>
                    <p>Role: Lead Developer</p>
                    <h3>Main Skills:</h3>
                    <ul>
                        <li>Developed UI within a 360-degree space by using three.js’s geometry and ray-casting tools to allow the user to navigate through videos by gazing</li>
                        <li>Iterated implementation over collaborative designs and user feedback to improve the functionality and user experience of the application</li>
                        <li>Consumed API calls in javascript to leverage a pre-existing system to shorten development time by months</li>
                    </ul>
                    <h3>Backstory:</h3>
                    <span>Sonic Foundry had an initiative to start promoting 360-degree videos, and one of the goals was the ability to watch a playlist in a headset. They already had a similar system for watching a playlist normally, but due to it changing the URL when it started the next video, it wouldn’t work within XR. And so, I developed a solution where the media of the video got swapped out, rather than the page itself, to keep the user from not being able to view the next video in the headset. Then, I created some UI with three.js that would subtly follow where the user was looking to keep it easy to use. Lastly, I implemented a gazing system that would trigger the UI and various effects when the user would look at the UI for a certain period of time.</span>
                </>
            }
        </div>
    )
}

export default ProjectDescription;