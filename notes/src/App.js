import catLogo from './img/catLogo.png';
import './App.css';
//Aqui van las rutas 


function Note(){
  return  (
    
    <div className="newNote"><textarea></textarea>
    <button>Guardar</button>

    </div>
    );
 
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
      </header>
     
      
      <Note/>
   <OpenNoteButton/>
    </div>
  );
}

export default App;
