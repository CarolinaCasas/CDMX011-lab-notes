import catLogo from '../img/catLogo.png';
import exit from '../img/exit.png';
import '../App.css';
import { Link } from 'react-router-dom';
import EntryNote from '../components/entryNote'
import PostNote from "../components/PostNote";



function Home() {
  return (
    <div className="App">
      <header className="header">

        <div className="CatandLetters">
          <img src={catLogo} className="catLogo" alt="catLogo" />
          <h1 className="hiNoteTittle">Hi!Note</h1>
        <Link to="/" className="Login"><img src={exit} className="exitImg" alt="exitImg" /></Link>
        </div>
      </header>


      <div className="sectionNotes">
        <EntryNote />
        <PostNote />
    </div>
    </div>
  );
}

export default Home;