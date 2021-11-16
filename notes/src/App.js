import catLogo from './img/catLogo.png';
import exit from './img/exit.png';
import './App.css';
//Aqui van las rutas
 
//Aqui se va a escribir la nota
// Saca info que llega a NOTE la sube a firestore
function NewNote(){
  return  (
   
    <div className="newNote"><textarea></textarea>
    <button>Guardar</button>
 
    </div>
    );
}
 
 
//Esta va a ser la funcion que imprime las notas
//Trae la info que saca NewNote la jala desde firestore
function Note(){
return(
<div className="postIt">
 <h1>Aqui vala nota</h1>
</div>
)
 
 
}
 
function OpenNoteButton(){
  const NoteVisible = () =>{console.log("pues si jala")}
 
 
  return(<button className="buttonNote"
  onClick={NoteVisible}>
    Agregar nota</button>)
 
}
 
function App(props){ 
return (
  <div className="App">
   
    <header className="header">
   
    <div className="CatandLetters">
    <img src={catLogo} className="catLogo" alt="catLogo"/>
    <h1 className="hiNoteTittle">Hi!Note</h1>
    </div>
    <img src={exit} className="exitImg" alt="exitImg"/>
    </header>
   
   
    <Note/>
 <OpenNoteButton/>
  </div>
);
}

export default App;



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