//import { Firestore } from "@firebase/firestore";
//import { async } from "@firebase/util";
import './note.css'
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import db from "../firebase/firebaseInital";

/* import Home from '../routesComp/home' */

function EntryNote(changeState) {
    const [note, setNote] = useState(
        {
            titleNote: '',
            bodyNote: ''
        });

    const handleInputChange = (event) => {
        setNote({
            ...note,
            [event.target.name]: event.target.value
        })
    }


    const sendData = async (event) => {
        event.preventDefault();
        console.log(note.titleNote + ' ' + note.bodyNote)

        const docRef = await addDoc(collection(db, "notes"), {
            titleNote: note.titleNote,
            bodyNote: note.bodyNote
        });
        console.log("Document written with ID: ", docRef.id);

        setNote({
            titleNote:'',
            bodyNote:''
        }
        )

        console.log('aqui'+note.titleNote+note.bodyNote);

    }



    return (
       <div>
        <form className='formNote' onSubmit={sendData}>
            <input placeholder='titulo de la nota'
                type='text'
                name='titleNote'
                onChange={handleInputChange}
                className='titleNote'
                value={note.titleNote}
            /><br/>
            <textarea className='bodyNote'
             name="bodyNote"
              onChange={handleInputChange} 
              placeholder="Escribe aqui tu nota"
              value={note.bodyNote}></textarea>
            <br/>
            <button className='addNote' type='submit'>Agregar nota</button>
        </form>
        </div>
    )
}

export default EntryNote;