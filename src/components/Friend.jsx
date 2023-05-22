import React, { useContext, useEffect } from 'react';
import { partContext } from '../context/constext';
import friend from "../assets/Acc.svg"

const  Friend = ({setCreateChat}) => {
    const { userNumber, getOneMessage, message, handleAddMessage, letters } = useContext(partContext)
    let username = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
      getIncomingMessage()
    },
    [])
    
    function getIncomingMessage() {
        setInterval(()=>{
        getOneMessage(username.idInstance, username.apiTokenInstance)
        }, 10000)

    }

    let obj = {
        name:message?.body?.senderData?.chatId.split("").slice(0,12).join(""),
        text: message?.body?.messageData?.textMessageData?.textMessage,
        receiptId:message?.receiptId
    }
    let str = letters?.map((item) => item.receiptId)
    let num = str?.filter((item) => item === obj.receiptId)
    let sum = num[0]
    // выбираем чат и открываем
    function messageOneHandler(item) {
        setCreateChat(item)
        

        if (obj.receiptId === sum) {
            return;
        }

        if(obj.receiptId !== sum){
            handleAddMessage(obj)
        }
    }
    
    
    // Шифруем число из сервера в дату
    let date = new Date(message?.body?.timestamp * 1000).toLocaleDateString()

    // Отделяем от номера последние елементы "@c.us"
    let numberPhone = message?.body?.senderData?.chatId.split("").slice(0,12).join("")

    return (
        <>
            {/* Это код выполняется если выполняется, если создается новый чат, при его отсутсвии он null - не показывается */}
            {
                userNumber ?
                <div onClick={()=>messageOneHandler(userNumber)} className="cursor-pointer hover:bg-[#d6dadf] flex items-center border-b-[1px] px-4 py-4 bg-[#F0F2F5] relative">
                    <img src={friend} alt="Собеседник" className="w-9 h-9" />
                    <h2 className="text-lg ml-4">+{userNumber}</h2>
                    <span className="absolute right-4 top-2 text-sm text-gray-400" >Сегодня</span>
                </div>
                :null
            }
            {/* Это код выполняется если у нас есть новые сообщения, если нет он также null - не показывается */}
            {
            message?.body?.messageData?.textMessageData?.textMessage ?
                <div onClick={()=>messageOneHandler(numberPhone)} className="cursor-pointer hover:bg-[#d6dadf] flex items-center border-b-[1px] px-4 py-2 bg-[#F0F2F5] relative">
                    <img src={friend} alt="Собеседник" className="w-9 h-9" />
                    <div className="flex flex-col ml-4">
                        <h2 className="text-lg font-medium">{message?.body?.senderData?.chatName}</h2>    
                        <h4 className="text-sm text-black/50">+{numberPhone}</h4>
                        </div>
                        <span className="absolute right-6 top-8 py-[1px] px-[10px] bg-[#00A783] text-white rounded-full">1</span>
                        <span className="absolute right-4 top-2 text-sm text-gray-400" >{date}</span>
                </div>
                :null
            }
        </> 
    );
};

export default Friend;