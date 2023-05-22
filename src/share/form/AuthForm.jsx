import React, { useContext, useState } from 'react';
import { partContext } from '../../context/constext';
import {useNavigate} from "react-router-dom"

const AuthForm = () => {
    const { saveUser } = useContext(partContext);
    // Состояние для храниения данных о  пользователе
    const [userId, setUserId] = useState(null);
    const [userToken, setUserToken] = useState("");
    const navigate = useNavigate()

    function saveUserData() {
        let newObj = {
            idInstance: userId,
            apiTokenInstance:userToken
        }
        saveUser(newObj)
        setUserId("");
        setUserToken("")
        setTimeout(() => {
            navigate('/send')
        }, 500)
    }
    return (
        <form className="w-[450px] h-[380px] bg-white shadow-2xl rounded-md p-4">
            <h2 className="text-2xl font-bold text-center my-4">Вход</h2>
            <h2 className="text-lg font-medium">Введите свои учетные данные из системы GREEN-API (idInstance, apiTokenInstance)</h2>
            <div className="flex flex-col my-3">
                <label for="id">idInstance</label>
                <input type="number" 
                name="id" placeholder="Введите правильно" 
                className="py-2 px-4 border border-gray-200 rounded-md outline-none focus:border-[#19fccb]" 
                value = {userId} 
                onChange = {(event) => setUserId(event.target.value)} />
            </div>
            <div className="flex flex-col my-3">
                <label >apiTokenInstance</label>
                <input type="text" 
                    name="token" placeholder="Введите правильно" 
                    className="py-2 px-4 border border-gray-200 rounded-md outline-none focus:border-[#19fccb] form-input"
                    value={userToken}
                    onChange={(e) => setUserToken(e.target.value)} />
            </div>
            <button onClick={saveUserData} type="button" className="w-full  bg-[#00A884] py-3 rounded-md hover:bg-[#19fccb] text-lg text-white font-medium">Войти</button>
        </form>
    );
};

export default AuthForm;