import React, { useContext, useEffect, useState } from 'react';
import { partContext } from '../context/constext';
import NewChat from './Chat/NewChat';
import IncomingChat from './Chat/IncomingChat';



const Chat = ({createChat}) => {
    const { userNumber, message} = useContext(partContext)

    return (
        <>
            {createChat == userNumber || createChat == message?.body?.senderData?.chatId.split("").slice(0,12).join("") ? <IncomingChat createChat={createChat} /> : null} 
        </>
    );
};

export default Chat; 