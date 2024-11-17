import React from "react";
import Button from "../atoms/Button";
import LoginForm from "../molecules/loginForm";

interface LoginSectionProps {
    label: string;
    email: string;
    password: string;
    onClick: () => void
}

const LoginSection : React.FC<LoginSectionProps> = ({email, password, onClick}) => {
    return(
        <div className="flex flex-col items-center">
            <LoginForm email={email} password={password}/>
            <Button  onClick={onClick}/>
        </div>
          

        
    );
}

export default LoginSection;