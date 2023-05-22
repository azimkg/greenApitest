import React, { useContext } from 'react';
import me from "../assets/me.svg"
import info from "../assets/info.svg"
import { partContext } from '../context/constext';


const Navbar = () => {
    const {deleteMessage, message} = useContext(partContext)
    let username = JSON.parse(localStorage.getItem("user"));
    return (
            <div className="p-3 h-[60px] bg-[#F0F2F5] flex items-center justify-between">
            <img src={me} alt="Аватар" className="w-8 h-8" />
            <div className="flex items-center">
                <span className="cursor-pointer border-none bg-none text-[#299141] text-base font-medium p-1 rounded-md hover:bg-[#F0F2F5] hover:text-[#00A783]" onClick={()=>deleteMessage(username.idInstance, username.apiTokenInstance, message?.receiptId)}>Обновить сообщения</span>
                <img src={info} alt="Settings" className="w-6 h-6 opacity-70 cursor-pointer" />
            </div>
            </div>
    );
};

export default Navbar;