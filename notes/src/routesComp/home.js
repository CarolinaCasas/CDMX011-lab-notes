import catLogo from '../img/catLogo.png';
import exit from '../img/exit.png';
import more from '../img/more.png';
import '../App.css';
import { Link } from 'react-router-dom';
import PostNote from "../components/PostNote";
import EntryNote from '../components/entryNote'
import Modal from '../components/Modal'
import React, { useState } from 'react';


function Home() {
  const [modalState, setModalState] = useState(false)


  return (
    <div className="App">
      <header className="header">
        <div className="CatandLetters">
          <img src={catLogo} className="catLogo" alt="catLogo" />
          <h1 className="hiNoteTittle">Hi! <br /> Note</h1>
        </div>
        <Link to="/" className="Login"><img src={exit} className="exitImg" alt="exitImg" /></Link>
      </header>
      <button className='addNoteButton' onClick={() => setModalState(!modalState)}><img src={more} className="addnoteImg" alt='more' />Agregar nota</button>
      <div className="sectionNotes">
        <Modal
          state={modalState}
          changeState={setModalState}>
          <EntryNote />
        </Modal>
        <PostNote />
      </div>
    </div>
  );
}

export default Home;