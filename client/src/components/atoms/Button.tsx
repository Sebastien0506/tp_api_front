// components/atoms/Button.tsx
import React from 'react';

interface ButtonProps {
  
  onClick: () => void;
  
}

const Button: React.FC<ButtonProps> = ({ onClick}) => {
  return (
    
    <button onClick={onClick}>
      
    </button>
  );
};

export default Button;