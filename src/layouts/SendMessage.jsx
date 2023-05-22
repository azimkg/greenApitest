import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import Chats from '../components/Chats';
import UndefinedChat from '../components/UndefinedChat';
import Chat from '../components/Chat';
import Friend from '../components/Friend';
import { partContext } from '../context/constext';

const SendMessage = () => {
    const {message} = useContext(partContext)
    // модалки
    const [create, setCreate] = useState(false)
    const [createModal, setCreateModal] = useState(false)
    const [createChat, setCreateChat] = useState("")

    return (
        <div className="relative h-full">
            <div className="w-full absolute -z-10 bg-[#00A783] h-[200px]"></div>
            <div className="p-5 w-full h-[700px]">
                <div className="rounded-md shadow-lg flex h-full">
                    <div className="flex flex-col w-[700px] bg-white">
                        <Navbar />
                        <Chats
                            create={create}
                            setCreate={setCreate}
                            createModal={createModal}
                            setCreateModal={setCreateModal}
                        />
                        <Friend setCreateChat={setCreateChat} /> 
                    </div>
                    <div className="bg-[#F0F2F5] w-full h-full border-l-2">
                        {createChat? <Chat createChat={createChat} />:
                        <UndefinedChat />}
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default SendMessage;