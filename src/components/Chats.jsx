import React from 'react';
import four from "../assets/four.svg"
import CreateChatForm from '../share/createChatForm/CreateChatForm';

const Chats = ({create, setCreate, createModal, setCreateModal}) => {
    return (
        <div className=" bg-white p-3 w-full flex flex-col">
            <div className="flex items-center justify-between">
                <input type="search" placeholder="Поиск или новый чат" className="bg-[#F0F2F5] w-full rounded-xl py-1 px-4 outline-none " />
                <img src={four} alt="Неизвсетно" className="w-6 h-6 cursor-pointer opacity-70 ml-4" />
            </div>
            <button onClick={()=>setCreateModal(!createModal)} className="mt-4 border-none bg-none text-[#299141] text-lg font-medium p-1 rounded-md hover:bg-[#F0F2F5] hover:text-[#00A783]">Создать чат +</button>
            {createModal ? <CreateChatForm setCreateModal={setCreateModal} setCreate={setCreate} /> : null}
            <div className="w-full h-[1px] bg-black/5"></div>
        </div>
    );
};

export default Chats;