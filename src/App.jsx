import './App.css';
import CategoryDisplay from './components/Category/CategoryDisplay';
import FocusDisplay from './components/Focus/FocusDisplay';
import Bio from './components/Bio/Bio';
import Header from './components/Header/Header';
import { FocusParam } from './lib/definitions';


function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const focus = queryParams.get(FocusParam);
  
  return (
    <>
      <Header />
      <Bio focus={focus} />
      <CategoryDisplay/>  
    </>
  )
}

export default App
