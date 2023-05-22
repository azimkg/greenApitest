import React, {useContext, useState} from 'react';
import { partContext } from '../../context/constext';

const CreateChatForm = ({setCreateModal, setCreate}) => {
    const {saveUserNumber} = useContext(partContext)
     // Хранение данных
    const [number, setNumber] = useState("")

    // Функция создания номера собеседника
    function saveNumber() {
        if (number === "") {
            return;
        }
        saveUserNumber(number)
        setCreateModal(false)
        setCreate(true)
    }
        
    return (
        <div className="flex items-center justify-between my-3">
            <input 
            type="text" 
            name="contact" 
            id="1" placeholder="Введите номер собеседника без +" 
            className="py-2 px-3 outline-none border-2 w-full rounded-md" 
            value={number} 
            onChange={(e)=>setNumber(e.target.value)} />
            <button onClick={saveNumber} className="ml-4 border-none bg-none text-[#299141] text-lg font-medium p-2 rounded-md hover:bg-[#F0F2F5] hover:text-[#00A783]">Создать</button>
        </div>
    );
};

export default CreateChatForm;