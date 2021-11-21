import React, { useState } from "react";

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


        const sendData =(event)=>{
            event.preventDefault();
            console.log(note.titleNote+' '+ note.bodyNote)
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