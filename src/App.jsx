import './App.css';
import CategoryDisplay from './components/Category/CategoryDisplay';
import linkedInLogo from './assets/socials/linkedIn.svg';

//<img src={linkedInLogo} alt="LinkedIn"/>

function App() {
  return (
    <>
      <header>
        
      </header>
      <div className='bio-holder'>
        <div className='left-bio'>
          <h1>Peter Hoppe</h1>
        </div>
        <div className='right-bio'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
        </div>        
      </div>
      <CategoryDisplay/>      
    </>
  )
}

export default App
