import { Categories } from "../../lib/definitions";

export function BioDescription(props) {
    const focus = props.focus;
    console.log(focus);

    const description = () => {
        switch(focus) {
            case Categories.VR:
                return <>
                    <p>I am a programmer with cross-disciplinary experience in software development, game design, and UX design. I learned full-stack programming and game design while in college before learning VR through contract work at a VR company before eventually developing web-based VR programs for a video platform company.</p>   
                    <p>After that job ended, I decided to take my five years of professional programming experience and pursue independent programming to sharpen my skill in VR technologies. Since then, my VR skills have grown and have successfully launched programs on the Meta Quest store.</p>
                    <p>Explore the programs below to learn more about me and my work</p>
                </>;
            case Categories.Web:
                return <>
                    <p>I am a programmer with cross-disciplinary experience in software development, game design, and UX design. I learned full-stack programming and game design while in college before being hired in web development, where I honed my front-end programming and UX skills. These skills allowed me to excel in developing engaging user interfaces and architecture reusable custom UI components with React and TypeScript.</p>   
                    <p>After five years of professional programming experience, I decided to pursue independent programming to sharpen my skills in these front-end technologies and have released programs emphasizing that growth.</p>
                    <p>Explore the programs below to learn more about me and my work.</p>
                    </>;
            case Categories.Games:
                return <>
                    <p>I am a programmer with cross-disciplinary experience in software development, game design, and UX design. I learned full-stack programming and game design while in college before being hired in web development, where I honed my front-end programming and UX skills. These skills leveraged an opportunity to work in VR, allowing me to combine my experience with games in a more business setting.</p>   
                    <p>After five years of professional programming experience, I returned to my first passion of video games to use those skills learned. In that time, I have independently programmed both VR games and web games.</p>
                    <p>Explore the programs below to learn more about me and my work.</p>
                </>;
            default:
                return <>
                    <p>I am a programmer with cross-disciplinary experience in software development, game design, and UX design. I learned full-stack programming and game design while in college before being hired in web development, where I honed my front-end programming and UX skills. These skills leveraged an opportunity to work in VR, allowing me to combine my experience with games in a more business setting.</p>   
                    <p>After five years of professional programming experience, I returned to my first passion of video games to use those skills learned. In that time, I have independently programmed both VR games and web games.</p>
                    <p>Explore the categories below to learn more about me and my work.</p>
                </>
                ;
        }
    }

    console.log(description());

    return <>{description()}</>;

}