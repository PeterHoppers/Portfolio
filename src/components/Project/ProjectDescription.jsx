import './ProjectDescription.css';

function ProjectDescription(props) {  
    const projectName = props.projectName;
    return (
        <div className='project-description'>
            {projectName === "Mind the Gap" &&
                <>
                    <div className='project-description__short-summary'>
                        <p><b>Genre:</b> Music & Rhythm, Trivia</p>
                        <p><b>Technology:</b> React, HTML5, SCSS, Next.js</p>
                        <p><b>Team Size:</b> 1</p>
                        <p><b>Duration:</b> May 2024 - July 2024</p>
                    </div>       
                    <div className='project-description__roles'>
                        <h3>Roles and Responsibilities:</h3>
                        <h4>Game Programmer</h4>
                        <ul>
                            <li>Created a simple prototype in next.js within a week so that playtesters could highlight where the fun was and possible pain points in the core gameplay loop</li>
                            <li>Coded a decoupled level system so that new levels could be easily developed and balance changes could be made instantaneously</li>
                            <li>Utilized the web audio API to slice and convert audio into the needed conditions so that levels could be changed without needing to spend time create new audio files</li>
                        </ul>
                        <h4>UX Designer</h4>
                        <ul>
                            <li>Iterated the user experience through multiple stages of playtesting, modifying UI elements to resolve user pain points and create intuitive design</li>
                            <li>Researched the necessary sound effects to help reinforce a user’s interaction with the game and then implemented them</li>
                            <li>Designed advanced levels through analyzing micro-genres and popular audio edits to create a feeling of skill progression through the game</li>
                        </ul>                        
                    </div>
                </>
            }
            {projectName === "VR Cornhole Training" &&
                <>
                    <div className='project-description__short-summary'>
                        <p><b>Genre:</b> Sports, Arcade, Puzzle</p>
                        <p><b>Engine:</b> Unity</p>
                        <p><b>Team Size:</b> 1</p>
                        <p><b>Duration:</b> November 2023 - February 2024</p>
                    </div>       
                    <div className='project-description__roles'>
                        <h3>Roles and Responsibilities:</h3>
                        <h4>Level Designer</h4>
                        <ul>
                            <li>Whiteboxed level concepts for playtesting before going through and adding 3D assets to make the levels feel more real</li>
                            <li>Iterated level ideas around the concept of each one having to change the “how” a player interacts with the game, rather than “when”</li>
                            <li>Designed a level progression so that mastery of a mechanic was established before adding more complexity through modification or overlap with other mechanics</li>
                        </ul>
                        <h4>Game Programmer</h4>
                        <ul>
                            <li>Created a simple prototype within a week so that playtesters could highlight which activities were most fun as early on in development as possible</li>
                            <li>Implemented a modular system for different game systems so that new levels and mechanics could be developed without being coupled to old mechanics</li>
                            <li>Modified assets acquired from the Unity store to properly integrate them with each other and original code while solving bugs that spawned along the way</li>
                            <li>Coded a system where level values could be stored in a single JSON file to enable simple modification of trophy values and level descriptions</li>
                        </ul>
                    </div>
                </>
            }
            {projectName === "Endless Scramble" &&
                <>
                    <div className='project-description__short-summary'>
                        <p><b>Genre:</b> Platform, Puzzle</p>
                        <p><b>Engine:</b> Unity</p>
                        <p><b>Team Size:</b> 1</p>
                        <p><b>Duration:</b> January 2018 - May 2018</p>
                    </div>             
                    <div className='project-description__roles'>
                        <h3>Roles and Responsibilities:</h3>
                        <h4>Game Designer</h4>
                        <ul>
                            <li>Designed a self-driven project that focused on one unique gameplay hook</li>                        
                            <li>Introduced hazards by isolating each new one before designing levels that utilized multiple hazards at once</li>
                            <li>Added medals to the game after it was discovered that time restraints increased the overall fun of the game</li>
                            <li>Coordinated with players of varying skill sets and game knowledge to acquire a range of feedback through playtesting a prototype</li>
                        </ul>
                        <h4>Game Programmer</h4>
                        <ul>
                            <li>Crafted class diagrams and design documents to help conceptualize the game’s design and gather ideas from other students and faculty</li>
                            <li>Developed a level editor tool to resolve the tedium that came from manually designing and developing levels</li>
                            <li>Rebuilt the core of the game a third into the project when it was discovered that the chosen architecture would not scale up as needed</li>
                        </ul>
                    </div>
                </>
            }
            {projectName === "CHARGED" &&
                <>
                    <div className='project-description__short-summary'>
                        <p><b>Genre:</b> Puzzle</p>
                        <p><b>Engine:</b> Unity</p>
                        <p><b>Team Size:</b> 11</p>
                        <p><b>Duration:</b> November 2016 - December 2016</p>
                    </div>         
                    <div className='project-description__roles'>
                        <h3>Roles and Responsibilities:</h3>
                        <h4>Product Owner</h4>
                        <ul>
                            <li>Lead an interdisciplinary team of eleven and facilitated communication to establish goals and expectations through Trello</li>
                            <li>Set expectations and scope when previously planned project fell through, leaving the team only a month to develop a working game</li>
                            <li>Developed the product through two-week sessions with planning and reviews before and after each session</li>
                        </ul>
                        <h4>Lead Designer</h4>
                        <ul>
                            <li>Pitched the game concept of &quot;pushing and pulling a particle from one end to another through points you placed&quot; to the rest of the team</li>
                            <li>Communicated design vision through multiple mediums to help resolve miscommunication issues that initially occurred during development</li>
                            <li>Researched how to produce a build online to gather feedback from playtesters outside the team through online documents</li>
                        </ul>      
                    </div>
                </>
            }
            {projectName === "Creator Colosseum" &&
                <>
                    <div className='project-description__short-summary'>
                        <p><b>Genre:</b> Sidescroller, Beat ‘Em Up</p>
                        <p><b>Engine:</b> Unity</p>
                        <p><b>Team Size:</b> 10</p>
                        <p><b>Duration:</b> April 2016 - May 2016</p>
                    </div>                    
                    <div className='project-description__roles'>
                        <h3>Roles and Responsibilities:</h3>
                        <h4>Programmer</h4>
                        <ul>
                            <li>Researched and developed a simple AI for the game’s bosses and enemies</li>
                            <li>Collaborated with other programmers to help integrate health and stamina into the movement and combat systems</li>
                        </ul>
                        <h4>Scrum Master</h4>
                        <ul>
                            <li>Performed weekly brief interviews with members of the ten-person development team to discuss and resolve any impediments with their current work conditions</li>
                            <li>Communicated the unhappy state of the team to the leadership team when it looked like the team was not going to be able to meet their goals</li>
                            <li>Mediated conversations between different groups on the team to make sure everyone was heard when change needed to be made</li>
                        </ul>  
                        <h4>Product Owner</h4>
                        <ul>
                            <li>Actively took the product owner role when the current lead needed to focus more on art</li>
                            <li>Highlighted areas where scope needed to be shrunk in order to meet a rapidly approaching deadline</li>
                            <li>Became the main character of the game (suggested by the lead designer) to help ease the burden on the art team, boost moral for the team, and help the game develop its tone</li>
                        </ul>
                    </div>
                </>
            }
            {projectName === "Diesel Thunder" &&
                <>
                    <div className='project-description__short-summary'>
                        <p><b>Genre:</b> Multiplayer Third-person Shooter</p>
                        <p><b>Engine:</b> Unity</p>
                        <p><b>Team Size:</b> 9</p>
                        <p><b>Duration:</b> January 2017 - May 2017</p>
                    </div>       
                    <div className='project-description__roles'>
                        <h3>Roles and Responsibilities:</h3>
                        <h4>Programmer</h4>
                        <ul>                        
                            <li>Created health and damage systems and then researched the best way to implement them through our networking system</li>
                            <li>Pair-programmed with other programmers of various skill levels to polish features and fix bugs</li>
                            <li>Battled with learning how to properly sync up variables during real-time combat</li>
                        </ul>
                        <h4>Git Repository Manager</h4>
                        <ul>
                            <li>Created a Github repository and worked with all the members of the team to make sure each one had the proper permissions to perform their role</li>
                            <li>Managed all git merges of varying coding styles to make sure all code was understandable and intertwined correctly</li>
                        </ul>
                    </div>
                </>
            }
            {projectName === "Inclusion" &&
                <>
                    <div className='project-description__short-summary'>
                        <p><b>Genre:</b> Visual Novel</p>
                        <p><b>Engine:</b> Bitsy</p>
                        <p><b>Team Size:</b> 1</p>
                        <p><b>Duration:</b> November 2018 - December 2018</p>
                    </div>                   
                    <div className='project-description__roles'>
                        <h3>Roles and Responsibilities:</h3>
                        <h4>Game Writer</h4>
                        <ul>                        
                            <li>Wrote a branching narrative which had ending shaped upon who the player decided to hang out with</li>
                            <li>Mapped the looping structure of the narrative to try and grasp the overall scope of the narrative</li>
                        </ul>
                        <h4>Game Programmer</h4>
                        <ul>
                            <li>Modded the JavaScript code of Bitsy to get the full range of features that I wanted</li>
                            <li>Created art that was simple but clearly understandable</li>
                        </ul>
                    </div>
                </>
            }
            {projectName === "In-Headset Navigation" &&
                <>
                    <div className='project-description__short-summary'>
                        <p><b>Technology:</b> three.js, video.js, React</p>
                        <p><b>Team Size:</b> 4</p>
                        <p><b>Duration:</b> January 2023 - August 2023</p>
                    </div>
                    <div className='project-description__roles'>
                        <h3>Roles and Responsibilities:</h3>
                        <h4>Lead Developer</h4>
                        <ul>
                            <li>Developed UI within a 360-degree space by using three.js’s geometry and ray-casting tools to allow the user to navigate through videos by gazing</li>
                            <li>Iterated implementation over collaborative designs and user feedback to improve the functionality and user experience of the application</li>
                            <li>Consumed API calls in javascript to leverage a pre-existing system to shorten development time by months</li>
                            <li>Researched and then architected a system where the media of a video would be swapped out so that it obeyed the rules of VR and web browsers</li>
                        </ul>
                    </div>
                    
                </>
            }
            {projectName === "Interaction Editor" &&
                <>
                    <div className='project-description__short-summary'>
                        <p><b>Technology:</b> three.js, HTML5, SCSS, React</p>
                        <p><b>Team Size:</b> 5</p>
                        <p><b>Duration:</b> March 2023 - August 2023</p>
                    </div>
                    <div className='project-description__roles'>
                        <h3>Roles and Responsibilities:</h3>
                        <h4>Lead Developer</h4>
                        <ul>
                            <li>Learned three.js and applied it to develop an application that worked with both standard videos and 360-degree videos</li>
                            <li>Utilized a React front-end and a C# back-end to edit the interactions, save the information to the database, and then pull in the information to render them properly on the video</li>
                            <li>Implemented designs created in Figma and built the tool while following previously created architectural design patterns</li>
                            <li>Synthesized the results of a heuristic evaluation to discover improvements to the application in terms of features and user experience</li>                        
                            <li>Highlighted simular use cases for interactions throughout the product to give the tool more valid use cases outside of VR</li>
                        </ul>
                    </div>                    
                </>
            }
            {projectName === "Guided Playback" &&
                <>
                    <div className='project-description__short-summary'>
                        <p><b>Technology:</b> C#, HTML5, SCSS, React</p>
                        <p><b>Team Size:</b> 6</p>
                        <p><b>Duration:</b> August 2022 - December 2022</p>
                    </div>
                    <div className='project-description__roles'>
                        <h3>Roles and Responsibilities:</h3>
                        <h4>Lead Developer</h4>
                        <ul>
                            <li>Organized user stories and design ideas with project managers and designers to solidify an implementation that matched clients’ desires through Figma and GitLab</li>
                            <li>Researched and developed a rough prototype to prove that the basic concept of the project would work despite browser limitations and XR</li>   
                            <li>Crafted a React application with an ASP.NET Core back-end that allowed users to view videos synchronously</li>
                            <li>Implemented designs created in Figma and collaborated with designers to iterate on the look and feel of the workflow</li>
                            <li>Tested numerous configurations with headsets and various browsers to make sure the basic workflow would work correctly before developing the complete system</li>
                        </ul>
                    </div>
                    
                </>
            }
            {projectName === "Online Driving Courses" &&
                <>
                    <div className='project-description__short-summary'>
                        <p><b>Technology:</b> jQuery, Bootstrap, CSS, PHP</p>
                        <p><b>Team Size:</b> 7</p>
                        <p><b>Duration:</b> December 2020 - July 2021</p>
                    </div>
                    <div className='project-description__roles'>
                        <h3>Roles and Responsibilities:</h3>
                        <h4>Front-end Developer</h4>
                        <ul>
                            <li>Drafted wireframes and designs to clarify with the client what their requirements were and how they wanted to achieve those visually</li>
                            <li>Constructed a custom front-end piece for navigation through courses with Bootstrap, JavaScript, and CSS</li>   
                            <li>Prototyped and developed the registration page to accept dynamic information with jQuery and PHP</li>
                            <li>Sought out possible UX issues during testing periods and developed solutions for them</li>                        
                        </ul>
                    </div>                    
                </>
            }
            {projectName === "Online Catalogs & Events" &&
                <>
                    <div className='project-description__short-summary'>
                        <p><b>Technology:</b> jQuery, Bootstrap, CSS, PHP</p>
                        <p><b>Team Size:</b> 4 - 7</p>
                        <p><b>Duration:</b> July 2020 - August 2021</p>
                    </div>
                    <div className='project-description__roles'>
                        <h3>Roles and Responsibilities:</h3>
                        <h4>Front-end Developer</h4>
                        <ul>
                            <li>Created wireframes in an iterative fashion directly with the client and internal project management team</li>
                            <li>Utilized Bootstrap classes and flexbox to achieve proper responsiveness for all screen sizes</li>   
                            <li>Worked with a system that was developed upon a JSON and AJAX framework</li>                      
                        </ul>
                    </div>
                </>
            }
            {projectName === "Outsider's Art Galleries" &&
                <>
                    <div className='project-description__short-summary'>
                        <p><b>Engine:</b> Unity</p>
                        <p><b>Team Size:</b> 3</p>
                        <p><b>Duration:</b> March 2020 - April 2020</p>
                    </div>
                    <div className='project-description__roles'>
                        <h3>Roles and Responsibilities:</h3>
                        <h4>Programmer</h4>
                        <ul>
                            <li>Connected software written in C# to a WordPress website through REST API to enable a seamless user experience from end-to-end</li>
                            <li>Integrated previously written C# code into the main code base to create a microphone and text chat for users to communicate within virtual worlds together</li>   
                            <li>Parsed and organized multiple JSON files to ease of reading and displaying data</li>                        
                        </ul>
                    </div>
                </>
            }
        </div>
    )
}

export default ProjectDescription;