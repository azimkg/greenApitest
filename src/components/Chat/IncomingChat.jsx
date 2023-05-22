import React, { useContext, useEffect, useState } from 'react';
import acc from "../../assets/Acc.svg"
import sendIcon from "../../assets/sendIcon.svg"
import info from "../../assets/info.svg"
import { partContext } from '../../context/constext';
import UndefinedChat from '../UndefinedChat';

const IncomingChat = ({createChat}) => {
    const { postMessage, message,  userNumber, mySms, handleSaveMessage, letters, handleAddMessage } = useContext(partContext)
    // Получение данных из LS данные для авторизации
    let username = JSON.parse(localStorage.getItem("user"));
    const [oneSms, setOneSms] = useState("") 
    // Для добавления к номеру
    const number = "@c.us"
    let un = userNumber + number

    // Получаем сообщения из виртуального сервера
    useEffect(() => {
        handleSaveMessage()
    },[])
    
    // Функция отправки сообщения, тем от кого получил сообщение
    function sendMessage1() {
        if (oneSms === "") {
            return;
        }
        let newObj = {
            chatId:message?.body?.senderData?.chatId,
            message: oneSms
        }
        let obj = {
            myName:996708082173,
            myText: oneSms,
            he:createChat
        }
        handleAddMessage(obj)
        postMessage(username.idInstance, username.apiTokenInstance, newObj)
        setOneSms("")
    }

    // Функция отправки сообщения созданным 
    function sendMessage2() {
        if (oneSms === "") {
            return;
        }
        let newObj = {
            chatId:un,
            message: oneSms
        }
         let obj = {
            myName:996708082173,
            myText: oneSms,
            he:createChat
        }
        handleAddMessage(obj)
        postMessage(username.idInstance, username.apiTokenInstance, newObj)
        setOneSms("")
    }
   
    return createChat === message?.body?.senderData?.chatId.split("").slice(0, 12).join("") && createChat === userNumber ? (
        <div className="flex flex-col justify-between h-full w-full">
                        <div className="p-3 h-[60px] flex items-center justify-between">
                            <div className="flex items-center">
                                <img src={acc} alt="Иконка аватара" className="w-8 h-8" />
                                <h2 className="text-lg ml-4">{message?.body?.senderData?.chatName}</h2>
                            </div>
                            <img src={info} alt="Settings" className="w-6 h-6 opacity-70" />
                        </div>
                        <div className="bg-[#EFEAE2] h-full overflow-y-scroll flex flex-col p-2">
                        {letters?.map((item) =>
                            item.text && item.name == createChat?
                            <p className="p-3 bg-white  rounded-md shadow m-2 text-startt">
                                {item.text}
                            </p>:null
                        )}
                        {letters?.map((item) =>
                            item.myText&& createChat == item.he ?
                            <p className="p-3 bg-[#86b6ab]  rounded-md shadow m-2 text-end">
                                {item.myText}
                            </p>:null
                        )}
                        </div>
                        <div className="p-3 flex items-center h-[60px] bg-[#F0F2F5]">
                            <input type="text" placeholder="Введите сообщение" className="w-full p-2 outline-none rounded-lg" value={oneSms} onChange={(e)=>setOneSms(e.target.value)} />
                            <img onClick={sendMessage1} src={sendIcon} alt="Иконка отправки" className="w-7 h-7 opacity-50 hover:opacity-100 cursor-pointer ml-4" />
                        </div>
                </div>):
(
        <>
            {createChat? createChat === message?.body?.senderData?.chatId.split("").slice(0, 12).join("") ?
                <div className="flex flex-col justify-between h-full w-full">
                        <div className="p-3 h-[60px] flex items-center justify-between">
                            <div className="flex items-center">
                                <img src={acc} alt="Иконка аватара" className="w-8 h-8" />
                                <h2 className="text-lg ml-4">{message?.body?.senderData?.chatName}</h2>
                            </div>
                            <img src={info} alt="Settings" className="w-6 h-6 opacity-70" />
                        </div>
                        <div className="bg-[#EFEAE2] h-full overflow-y-scroll flex flex-col p-2">
                        {letters?.map((item) =>
                            item.text && item.name == createChat?
                            <p className="p-3 bg-white  rounded-md shadow m-2 text-startt">
                                {item.text}
                            </p>:null
                            )} 
                        {letters?.map((item) =>
                            item.myText&& createChat == item.he ?
                            <p className="p-3 bg-[#86b6ab]  rounded-md shadow m-2 text-end">
                                {item.myText}
                            </p>:null
                        )}
                        </div>
                        <div className="p-3 flex items-center h-[60px] bg-[#F0F2F5]">
                            <input type="text" placeholder="Введите сообщение" className="w-full p-2 outline-none rounded-lg" value={oneSms} onChange={(e)=>setOneSms(e.target.value)} />
                            <img onClick={sendMessage1} src={sendIcon} alt="Иконка отправки" className="w-7 h-7 opacity-50 hover:opacity-100 cursor-pointer ml-4" />
                        </div>
                </div>
            :null :null
            }
            {createChat? createChat === userNumber ?
                <div className="flex flex-col justify-between h-full">
                    <div className="p-3 h-[60px] flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={acc} alt="Иконка аватара" className="w-8 h-8" />
                            <h2 className="text-lg ml-4">+{userNumber == message?.body?.senderData?.chatName ? message?.body?.senderData?.chatName : userNumber}</h2>
                        </div>
                        <img src={info} alt="Settings" className="w-6 h-6 opacity-70" />
                    </div>
                    <div className="bg-[#EFEAE2] h-full overflow-y-scroll">
                        {letters?.map((item) =>
                            item.text && item.name == createChat?
                            <p className="p-3 bg-white  rounded-md shadow m-2 text-startt">
                                {item.text}
                            </p>:null
                            )} 
                        
                        {letters?.map((item) =>
                            item.myText&& createChat == item.he ?
                            <p className="p-3 bg-[#86b6ab]  rounded-md shadow m-2 text-end">
                                {item.myText}
                            </p>:null
                        )}
                    </div>
                    <div className="p-3 flex items-center h-[60px] bg-[#F0F2F5]">
                        <input type="text" placeholder="Введите сообщение" className="w-full p-2 outline-none rounded-lg" value={oneSms} onChange={(e)=>setOneSms(e.target.value)} />
                        <img onClick={sendMessage2} src={sendIcon} alt="Иконка отправки" className="w-7 h-7 opacity-50 hover:opacity-100 cursor-pointer ml-4" />
                    </div>
                </div>
                : null
                :null
            }
        
        </>
    );
};

export default IncomingChat;