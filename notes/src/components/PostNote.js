import './Modal.css'
import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../firebase/firebaseInital";

function PostNote() {
    const [notes, setNote] = useState([]);
    useEffect(() => {

        onSnapshot(collection(db, "notes"), (doc) => {
            
            setNote(doc.docs.map((doc) =>({...doc.data(), id: doc.id})));
        });
    });


    return (
        <div className="postNoteContainer">
            {notes.map((note) =>(
                <div className="postNote" key={note.id}>
                    <p className="titleNotes">{note.titleNote}</p>
                    <p>{note.bodyNote}</p>
                </div>
            )
             )}
        </div>
    );

}

export default PostNote;