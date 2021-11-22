//import { Firestore } from "@firebase/firestore";
//import { async } from "@firebase/util";
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import db from "../firebase/firebaseInital";

function Modals() {
    const [note, setNote] = useState(
        {
            titleNote: '',
            bodyNote: ''
        });

        const handleInputChange = (event) =>{
setNote({
    ...note,
    [event.target.name] : event.target.value
})
        }


        const sendData = async(event)=>{
            event.preventDefault();
            console.log(note.titleNote+' '+ note.bodyNote)

                const docRef = await addDoc(collection(db, "notes"), {
                    titleNote: note.titleNote,
                    bodyNote: note.bodyNote
                });
                console.log("Document written with ID: ", docRef.id);
              
        
        }
    return (
        <form onSubmit={sendData}>
            <input placeholder='titulo de la nota'
                type='text'
                name='titleNote'
                onChange={handleInputChange}
            />
            <textarea className='newNote' name="bodyNote" onChange={handleInputChange}></textarea>

            <button className='addNote' type='submit'>Agregar nota</button>
        </form>
    )
}

export default Modals;