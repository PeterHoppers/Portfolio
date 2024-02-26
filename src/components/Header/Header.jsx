
import linkedInLogo from '../../assets/socials/linkedIn.svg'
import githubLogo from '../../assets/socials/github.svg';
import emailLogo from '../../assets/socials/email.svg';
import './Header.css';

function Header(props) {  
    return (
        <header>
            <div className='header__socials'>
                <a href = "mailto:peterhoppe341@gmail.com" target="_blank">
                    <img src={emailLogo} alt="Email Me"/>
                </a> 
                <a href = "https://www.linkedin.com/in/peter-hoppe/" target="_blank">
                    <img src={linkedInLogo} alt="LinkedIn"/>
                </a>   
                <a href = "https://github.com/PeterHoppers" target="_blank">
                    <img src={githubLogo} alt="Github"/>
                </a>                 
            </div>                 
      </header>
    )
}

export default Header;