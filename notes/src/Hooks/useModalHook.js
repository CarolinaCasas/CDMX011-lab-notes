import { useState } from "react";

export const useModalHook= (initialValue=false) =>{
        const [isOpen, setisOpen] = useState(initialValue);

        //metodo que permite abrir el modal
//Se ejecuta la funcion actualizadora setisopen para cambiar el valor a true
        const openModal =()=>setisOpen(true);
        const closeModal =()=>setisOpen(false);
//tambien se puede retornar como objeto
        return [isOpen, openModal, closeModal];
        
}