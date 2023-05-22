import React, { useContext, useState } from 'react';
import acc from "../../assets/Acc.svg"
import sendIcon from "../../assets/sendIcon.svg"
import info from "../../assets/info.svg"
import { partContext } from '../../context/constext';

const NewChat = () => {
    const { userNumber, postMessage, message, getMyMessage, mySms } = useContext(partContext)
    let username = JSON.parse(localStorage.getItem("user"));
    const [oneSms, setOneSms] = useState("")
    const number = "@c.us"
    let str = userNumber + number
    

    function sendMessage() {
        if (oneSms === "") {
            return;
        }
        let newObj = {
            chatId:str,
            message: oneSms
        }
         let newObj2 = {
            chatId:str,
            count:100
        }
        getMyMessage(username.idInstance, username.apiTokenInstance, newObj2)
        postMessage(username.idInstance, username.apiTokenInstance, newObj)
        setOneSms("")
    }
    return (
        <div className="flex flex-col justify-between h-full">
            <div className="p-3 h-[60px] flex items-center justify-between">
                <div className="flex items-center">
                    <img src={acc} alt="Иконка аватара" className="w-8 h-8" />
                    <h2 className="text-lg ml-4">+{userNumber == message?.body?.senderData?.chatName?message?.body?.senderData?.chatName: userNumber}</h2>
                </div>
                <img src={info} alt="Settings" className="w-6 h-6 opacity-70" />
            </div>
            <div className="bg-[#EFEAE2] h-full overflow-y-scroll">
                {mySms?.map((item) =>
                <div className="p-3 bg-white w-[300px] rounded-md shadow mt-2 ml-2 flex items-end">
                    {item.textMessage}
                </div>
                )} 
            </div>
            <div className="p-3 flex items-center h-[60px] bg-[#F0F2F5]">
                <input type="text" placeholder="Введите сообщение" className="w-full p-2 outline-none rounded-lg" value={oneSms} onChange={(e)=>setOneSms(e.target.value)} />
                <img onClick={sendMessage} src={sendIcon} alt="Иконка отправки" className="w-7 h-7 opacity-50 hover:opacity-100 cursor-pointer ml-4" />
            </div>
        </div>
    );
};

export default NewChat;