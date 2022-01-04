import catLogo from '../img/catLogo.png';
import exit from '../img/exit.png';
import '../App.css';
import { Link } from 'react-router-dom';
import PostNote from "../components/PostNote";
import EntryNote from '../components/entryNote'


function Home() {



  return (
    <div className="App">
      <header className="header">
        <div className="CatandLetters">
          <img src={catLogo} className="catLogo" alt="catLogo" />
          <h1 className="hiNoteTittle">Hi! <br /> Note</h1>
        </div>
        <Link to="/" className="Login"><img src={exit} className="exitImg" alt="exitImg" /></Link>
      </header>
    
      <div className="sectionNotes">
        <EntryNote/>
        <PostNote />
      </div>
    </div>
  );
}

export default Home;