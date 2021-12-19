import './note.css'
import React, { useEffect, useState } from "react";
import { collection, onSnapshot, doc, deleteDoc} from "firebase/firestore";
import db from "../firebase/firebaseInital";
import edit from '../img/edit.png';
import deleteImg from '../img/delete.png';




function PostNote() {
    const [notes, setNote] = useState([]);

    const DeleteNote =async(id)=>{
        const userDoc=  doc(db, 'notes', id);
        await deleteDoc(userDoc);
        console.log(id);
    }

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "notes"), (doc) => {
            setNote(doc.docs.map((doc) =>({...doc.data(), id: doc.id})));
        });

        return unsubscribe;
    }, []);
 

    return (
        <div className="postNoteContainer">
            {notes.map((note) =>(
                <div className="postNote" key={note.id}>
                    <p className="titleNotes">{note.titleNote}</p><br/>
                    <p>{note.bodyNote}</p><br/>
                    <img src={edit} className="editImg" alt="editImg" />
                    <img src={deleteImg} className="deleteImg" alt="deleteImg" onClick={()=>{DeleteNote(note.id)}}/>
                </div>
            )
             )}
        </div>
    );

}

export default PostNote;