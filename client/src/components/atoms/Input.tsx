import React from "react";

interface InputProps{
    email : string;
    password: string;
}

const  Input: React.FC<InputProps> = ({email = "email", password = "password"}) => {
    return(
        <>
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-1"></label>
        <input type="text" id="email" placeholder={email} className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>

        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-1"></label>
        <input type="password" id="password" placeholder={password} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </>
        
    );
}
export default Input;