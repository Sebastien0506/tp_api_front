// components/atoms/Button.tsx
import React from 'react';

interface ButtonProps {
  
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    
    <button onClick={onClick} className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
      
    </button>
  );
};

export default Button;