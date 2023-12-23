import React, { useState } from 'react';
import MainContent from './components/MainContent';
import keyImg from './assets/key.png'
import hogwarts from './assets/hogwarts.png'

const App = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordSubmit = () => {
    const lowercasePassword = password.toLowerCase();
    if (lowercasePassword === 'asmita') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <div className=''>
      {!isAuthenticated ? (
        <div className='flex flex-col items-center min-h-screen w-screen justify-center bg-[#001f3f] text-white space-y-3'>

          <img className='w-[300px] h-[300px]' src={hogwarts} alt="oranges" />

          <p className=''>This content is password-protected.</p>

          <div className='flex flex-row items-center'>
            <img className='w-[80px] h-[80px]' src={keyImg} alt="oranges" />

            <input
              className='text-gray-200 w-[150px] h-[50px] text-center rounded-md bg-green-900'
              type="text"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className='bg-yellow-300 text-red-800 font-bold p-4 rounded-lg text-lg italic'
            onClick={handlePasswordSubmit} type='submit'>Submit</button>
        </div>
      ) : (
        <MainContent />

      )}
    </div>
  );
};

export default App;