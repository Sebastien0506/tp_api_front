// src/components/LoginForm.js
import React, { useState } from 'react';
import { useLoginMutation } from '../../services/authApi';
import { useDispatch } from 'react-redux';



function LoginForm() : React.FC {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const handleSubmit = async (e : React.FormEvent) => {
    e.preventDefault();
    console.log("bonjour", email, password)

    try {
      const response  = await login({ email, password });
      
      console.log(response);
    } catch (error) {
      console.error('Failed to login:', error);
    }
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    
    <div className="bg-white shadow-md rounded-lg w-full max-w-4xl flex">
      
      <div className="w-2/3 p-8">
        <h1 className="text-xl font-bold text-center mb-6">Login In</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <input
              type="text"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          
          <div>
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="keepMeLoggedIn"
              className="h-4 w-4 text-blue-500 focus:ring-2 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="keepMeLoggedIn" className="ml-2 text-gray-700">
              Keep me logged in
            </label>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Se connecter
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-700">
            Mot de passe oublié?{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Réinitialiser
            </a>
          </p>
        </div>
      </div>

     
      <div className="w-1/3 bg-gray-50 flex flex-col items-center justify-center p-8">
        <h2 className="text-lg font-bold text-gray-700">Company Logo</h2>
        <p className="text-gray-600 text-center mt-4">
          Here you can include additional information about the company or any relevant content.
        </p>
      </div>
    </div>
  </div>
    
  );
}

export default LoginForm;