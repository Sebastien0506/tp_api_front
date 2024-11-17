import React from "react";
import LoginSection from "../organisms/LoginSection";

interface LoginTemplatesProps {
    email: string;
    password : string;
    onClick : () => void
}

const LoginTemplates : React.FC<LoginTemplatesProps> = ({email, password, onClick}) => {
       return(
        <div className="flex flex-col items-center">
             <h2 className="text-2xl font-semibold mb-6">Login</h2>
             <LoginSection email={email} password={password} onClick={onClick}/>
        </div>
           
        
       );
}

export default LoginTemplates;