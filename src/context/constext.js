import React, { useReducer } from "react";
import axios from "axios";


export const partContext = React.createContext();

const INIT_STATE = {
    message: null,
    userNumber: "",
    letters: [],
    mySms: null
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_ALL_MESS":
            return { ...state, message: action.payload };
        case "GET_USER_NUMBER":
            return { ...state, userNumber: action.payload }
        case "GET_SAVE_MESS":
            return { ...state, letters: action.payload }
        case "GET_MY":
            return { ...state, mySms: action.payload }
        default:
            return state;
    }
};

const PartsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    // Получение сообщение
    async function getOneMessage(idUser, token) {
        try {
            let { data } = await axios.get(`https://api.green-api.com/waInstance${idUser}/ReceiveNotification/${token}`)
            dispatch({
                type: "GET_ALL_MESS",
                payload: data
            })
        } catch (e) {
            console.log(e)
        }
    }


    // Удаление сообщания из очереди
    async function deleteMessage(idUser, token, messageId) {
        try {
            let { data } = await axios.delete(`https://api.green-api.com/waInstance${idUser}/DeleteNotification/${token}/${messageId}`)
        } catch (e) {
            console.log(e)
        }
    }

    // Отправка сообщения
    async function postMessage(idUser, token, message) {
        let { data } = await axios.post(`https://api.green-api.com/waInstance${idUser}/SendMessage/${token}`, message, {
            headers: {
                "Content-type": "application/json",
            },
        });
        dispatch({
            type: "GET_MY_MESS",
            payload: data
        })
        console.log(data)
    }

    // Функция сохранения пользователя
    async function saveUser(user) {
        localStorage.setItem("user", JSON.stringify(user));
    }

    // Сохраняем номер нового собеседника
    async function saveUserNumber(user) {
        dispatch({
            type: "GET_USER_NUMBER",
            payload: user
        })
    }

    // Создал виртуальный сервер для хранения сообщений
    async function handleSaveMessage() {
        try {
            let { data } = await axios.get("http://localhost:8000/letters")
            dispatch({
                type: "GET_SAVE_MESS",
                payload: data
            })
        } catch (e) {
            console.log(e)
        }
    }
    async function handleAddMessage(message) {
        try {
            let { data } = await axios.post("http://localhost:8000/letters", message)
            handleSaveMessage()
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <partContext.Provider
            value={{
                message: state.message,
                userNumber: state.userNumber,
                mySms: state.mySms,
                letters: state.letters,
                saveUser,
                saveUserNumber,
                postMessage,
                getOneMessage,
                deleteMessage,
                handleSaveMessage,
                handleAddMessage
            }}
        >
            {children}
        </partContext.Provider>
    );
};
export default PartsContextProvider;