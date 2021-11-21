//import React,{Component} from 'react'
import catLogo from '../img/catLogo.png';
import exit from '../img/exit.png';
import '../App.css';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal.js'
import { useModalHook } from '../Hooks/useModalHook';


function OpenNoteButton() {
  const NoteVisible = () => {
    console.log("si funciona")

  }


  return (<button className="buttonNote"
    onClick={NoteVisible}>
    Agregar nota
  </button>)

}

function Home(props) {
  const [isOpenModal, openModal, closeModal] = useModalHook(false);
  console.log([isOpenModal,openModal, closeModal]);
  return (
    <div className="App">
      <header className="header">

        <div className="CatandLetters">
          <img src={catLogo} className="catLogo" alt="catLogo" />
          <h1 className="hiNoteTittle">Hi!Note</h1>
        </div>

        <Link to="/" className="Login"><img src={exit} className="exitImg" alt="exitImg" /></Link>

        <OpenNoteButton />
      </header>
      <Modal />
    </div>
  );
}

export default Home;



/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */