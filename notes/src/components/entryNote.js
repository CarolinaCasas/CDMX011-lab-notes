//import { Firestore } from "@firebase/firestore";
//import { async } from "@firebase/util";
import './note.css'
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import db from "../firebase/firebaseInital";
import more from '../img/more.png';
import Modal from '../components/Modal'

/* import Home from '../routesComp/home' */

function EntryNote() {
    const [modalState, setModalState] = useState(false)
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
            titleNote: '',
            bodyNote: ''
        }
        )
        //manipula el estado del modal para cerrarlo despues de publicar la nota
        setModalState(!modalState);

    }




    return (
        <>
            <button className='addNoteButton' onClick={() => setModalState(!modalState)}>
                <img src={more} className="addnoteImg" alt='more' />Agregar nota
            </button>
            <Modal
                state={modalState}
                changeState={setModalState}>
                <form className='formNote' onSubmit={sendData} >
                    <input placeholder='titulo de la nota'
                        type='text'
                        name='titleNote'
                        onChange={handleInputChange}
                        className='titleNote'
                        value={note.titleNote}
                    /><br />
                    <textarea className='bodyNote'
                        name="bodyNote"
                        onChange={handleInputChange}
                        placeholder="Escribe aqui tu nota"
                        value={note.bodyNote}>
                    </textarea>
                    <br />
                    <button className='addNote' type='submit'>Agregar nota</button>
                </form>
            </Modal>
        </>
    )
}

export default EntryNote;