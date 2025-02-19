import {Categories} from "./util.js";

const playCallToAction = "Click Here to Play!";

class Project {
    constructor(name, description, category, coverArt, thumbnails, previewVideoURl, viewText, viewURL) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.coverArt = coverArt;
        this.thumbnails = thumbnails;
        this.previewVideoURl = previewVideoURl;
        this.viewText = viewText;
        this.viewURL = viewURL;
    }
}

class Thumbnail {
    constructor(src, alt) {
        this.src = src;
        this.alt = alt;
        this.key = src + alt;
    }
}

const Projects = [
    new Project(
        "Cosmic Scramble",
        "Travel through space alone or with a friend as you scramble to escape the alien threat with every input scrambling your controls.",
        [
            Categories.Games
        ],
        "cosmicScramble.png",
        [
            new Thumbnail(
                "level1-4.gif",
                "Everytime the player inputs a direction on the joystick, the relationship between which input direction would move which direction would scramble."
            ),
            new Thumbnail(
                "level1-5.gif",
                "Time only advances when the player would input something or after about a second, giving the player just enough time to react."
            ),
            new Thumbnail(
                "arcade_cab.png",
                "The arcade cabinet itself in the arcade. This photo was taken when it was running an earlier build of the game."
            ),
            new Thumbnail(
                "scriptableObjectsExample.png",
                "A visual breakdown of how the main systems of the game used scriptable objects to isolate different pieces of logic."
            ),
               
        ],
        null,
        null
    ),
    new Project(
        "Mind the Gap",
        "How good is your rhythm and song knowledge? In this music sequencing game, you try to guesstimate the gap between two pieces of a song.",
        [
            Categories.Games,
            Categories.Web
        ],
        "mindtheGap.png",
        null,
        "https://www.youtube.com/embed/j-e45pydjt4?si=_yhdRpD1iDA3imx0",
        playCallToAction,
        "https://music-gap.vercel.app/"
    ),
    new Project(
        "VR Cornhole Training",
        "Experience cornhole like you never have before! Throw bags in 30 different levels with varying conditions and earn trophies for high scores.",
        [
            Categories.Games,
            Categories.VR
        ],
        "cornhole.png",
        null,
        "https://www.youtube.com/embed/yFyxGWWsaKk?si=1UazwdjFVde_AlRZ",
        "Click Here to View on the Meta Store!",
        "https://www.meta.com/experiences/7004532726309856/"
    ),
    new Project(
        "In-Headset Navigation",
        "The ability to choose and watch multiple 360-degree videos without taking off the headset.",
        [
            Categories.VR
        ],
        "headsetNavigation.png",
        null,
        "https://www.youtube.com/embed/2NwT-TVMUvE?si=qGpScgfD0WkpuA-s",
    ),
    new Project(
        "Interaction Editor",
        "A tool to add items, which when interacted with, could send the viewer between videos, different parts of the video, or to a separate page.",
        [
            Categories.Web
        ],
        "interactionEditor.png",
        null,
        "https://www.youtube.com/embed/AF49ek08xDo?si=AxOuxuuaAw141zYb",
    ),
    new Project(
        "Guided Playback",
        "A tool to configure watching a video between multiple devices simultaneously.",
        [
            Categories.Web,
            Categories.VR
        ],
        "guidedPlayback.png",
        null,
        "https://www.youtube.com/embed/fo_O2GgBYwI?si=LkqVP8tulU3Hiu8Y",
    ),    
    new Project(
        "Online Catalogs & Events",
        "Working directly with various associations across the country to create their online catalog and help them host online events.",
        [
            Categories.Web
        ],
        "associationCover.png",
        [            
            new Thumbnail(
                "asfcmap.png",
                "An HTML interactive map created through supplied images that navigated the vistor to different parts of the site for an event."
            ),
            new Thumbnail(
                "ascrs.png",
                "ASCRS' Education Catalog where users could navigate through their varying courses and programs."
            ),
            new Thumbnail(
                "emco.png",
                "The display of the EMCO catalog, showing users the information needed about various different courses."
            )
        ],
    ),
    new Project(
        "Outsider's Art Galleries",
        "An interactive experience that gives artists new opportunities to exhibit and sell their work.",
        [
            Categories.VR
        ],
        "outsiders3.png",
        null,
        "https://www.youtube.com/embed/bSOF01sCaGA?si=bREw1xSm0MYKpceC",
    ),
    new Project(
        "CHARGED",
        "Physics-based puzzler designed by me, leading an interdisciplinary team of eleven people.",
        [
            Categories.Games
        ],
        "charged1.png",
        [
            new Thumbnail(
                "charged2.png",
                "The player would fire a negative ion to have it reach the red swirl with green triangles in the bottom right corner."
            ),
            new Thumbnail(
                "charged3.png",
                "To do this, the player would fire the ion into positive source that would pull the ion towards its center."
            ), 
            new Thumbnail(
                "charged4.png",
                "Later on, negative sources would be added, causing the icon to be pushed away instead."
            ),
        ],
        null,
        playCallToAction,
        "https://nofunpetegames.github.io/Charged/"
    )
];

export {
    Project,
    Projects
};

/* 
new Project(
        "Creator Colosseum",
        "Side-scrolling beat ‘em up that got my face when the team needed me to lead.",
        [
            Categories.Games
        ],
        "creatorCover.png",
        [
            new Thumbnail(
                "cc2.png",
                "The game's combat was a side-scroller beat-em-up using the teachers at the school for enemeies."
            ),
            new Thumbnail(
                "cc3.png",
                "There were four different levels in the game that had you traveling around the city that the school took place."
            ), 
            new Thumbnail(
                "cc4.png",
                "Combat included spells that could be casted, as well as melee and range attacks."
            ),
        ],
        null,
        "Click Here to Download!",
        "https://peterhoppe.itch.io/creator-colosseum"
    ),
new Project(
        "Online Driving Courses",
        "Front-end design and development for a large national automobile association's new online courses.",
        [
            Categories.Web
        ],
        "aaaCover.png",
        [
            new Thumbnail(
                "aaacourse.png",
                "A view of the landing page when someone would enroll within the course and go through the modules."
            ),
            new Thumbnail(
                "aaaregister.jpg",
                "The registration page, which was in charge of displaying the correct prices depending what state and zipcode they lived in."
            ),
            new Thumbnail(
                "aaaregister2.jpg",
                "This part of the registration page highlights the need for all the front-end validation of information."
            )    
        ],
    ),
,
    new Project(
        "Diesel Thunder",
        "An online third-person shooter where players battled each other in tanks.",
        [
            Categories.Games
        ],
        "dieselthunder.png",
        [
            new Thumbnail(
                "dieselthunder2.png",
                "The basic layout of what the game looked like in the player chose a red-color tank."
            ),
            new Thumbnail(
                "hud.png",
                "Two players battling over an item that has spawned that recovers a tank's health."
            ), 
            new Thumbnail(
                "basetest.png",
                "There are multiple types of tanks to choose from: each with their own health, speed, and weapon types."
            ),
        ],
        null,
        "Click Here to Download!",
        "https://drive.google.com/file/d/1hzIDzOfFkXlR7PpnCnGBWD2a0lmGIeTZ/view"
    ),
    new Project(
        "Inclusion",
        "A branching narrative focused on fitting in at school and pixelated art style.",
        [
            Categories.Games
        ],
        "inclusion.png",
        [
            new Thumbnail(
                "inclusion2.png",
                "Bitsy was a javascript based game engine that focused around creating non-linear stories through pixel art."
            ),
            new Thumbnail(
                "inclusion3.png",
                "Different colored sprites were used to highlight the interactivity of said sprites."
            ), 
            new Thumbnail(
                "inclusion4.png",
                "I wanted to include more fuctionality than the game engine would allow, sparking me to modify the engine itself."
            ),
        ],
        null,
        playCallToAction,
        "https://sly-merc.neocities.org/inclusion3"
    ) ,
     new Project(
        "Endless Scramble",
        "A solo developed game where the player needed to navigate through obstacles as fast as possible, with every input scrambling their controls.",
        [
            Categories.Games
        ],
        "endlessScramble.png",
        [
            new Thumbnail(
                "movers.gif",
                "Everytime the player pressed a button to move, the relationship between which button would move which direction would be scrambled."
            ),
            new Thumbnail(
                "endlessscramble2.png",
                "Players needed to complete the levels in a certain amount of time to earn medals that would unlock more levels."
            ),
            new Thumbnail(
                "endlessscramble3.png",
                "To gather as much feedback on it as fast as possible, a web build was made."
            )    
        ],
        null,
        playCallToAction,
        "https://peterhoppers.github.io/Endless-Scramble/"
    ),
        
    
    */