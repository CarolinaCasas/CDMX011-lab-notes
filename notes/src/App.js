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

</div>
)
  
 
}

function OpenNoteButton(){
  const NoteVisible = () =>{console.log("pues si jala")}


  return(<button className="buttonNote" 
  onClick={NoteVisible}>
    Agregar nota</button>)

}

function App(props) {

  



  return (
    <div className="App">
      
      <header className="header">
     
      <img src={catLogo} className="catLogo" alt="catLogo"/>
      <h1>Hi!Note</h1>
      <img src={exit} className="exitImg" alt="exitImg"/>
      </header>
     
      
      <Note/>
   <OpenNoteButton/>
    </div>
  );
}

export default App;
