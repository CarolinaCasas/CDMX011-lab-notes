/* import './Modal.css'
import { collection, addDoc } from "firebase/firestore"; */
import React, { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
 import db from "../firebase/firebaseInital"; 

function PostNote(){
useEffect(()=>{
   
    const PrintNote = async()=>{
        const notes =  await getDocs(collection(db, "notes"));
        notes.forEach((doc) => {

          const wholeNote={
              title: doc.data().titleNote,
              body: doc.data().bodyNote
          }
          console.log(wholeNote);

        });
        
    }
    PrintNote();
})


    return(
        <div>
        <p className="titleNote"></p>
        <p className="bodyNote"></p>
        </div>
    );
    
}

export default PostNote;