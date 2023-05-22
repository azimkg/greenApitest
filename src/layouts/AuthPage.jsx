import React from 'react';
import whatsApp from "../assets/whatsapp.svg"
import AuthForm from '../share/form/AuthForm';

const AuthPage = () => {
    return (
        <div className="relative w-full h-screen">
            <div className="bg-[#00A884] h-[200px] w-full">
                <div className="container relative">
                    <div className='absolute top-12 left-32 flex items-center gap-2'>
                        <img src={whatsApp} alt="WhatsApp" className="w-10 h-10 " />
                        <h2 className='text-white font-medium text-xl'>WHATSAPP WEB</h2>
                    </div>
                </div>
            </div>    
            <div className="absolute w-full h-full left-0 top-0 flex items-center justify-center">
                <AuthForm />
            </div>
        </div>
    );
};

export default AuthPage;