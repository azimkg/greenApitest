import React from 'react';
import undefined from "../assets/undefined.svg"

const UndefinedChat = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <img src={undefined} alt="Неизвестная страница" className="w-[300px] h-[300px]" />
            <h2 className="text-2xl text-normal text-black/50">WhatsApp Web</h2>
            <p className="text-sm text-normal text-black/70">Отправляйте и получайте сообщения без необходимости оставлять телефон подключенным.</p>
        </div>
    );
};

export default UndefinedChat;