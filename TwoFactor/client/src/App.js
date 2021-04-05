import { useState, useEffect } from 'react';
import User from './components/User';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState('');
  const [code, setCode] = useState('');
  const [wasChecked, setWasChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/users');
        const data = await response.json();
        setUsers(data.users);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);

  const createUser = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username }),
      });
      const data = await response.json();
      setUsers((prevData) => [...prevData, data.user]);
      setUsername('');
    } catch (err) {
      console.log(err);
    }
  };

  const verifyUser = async () => {
    try {
      setWasChecked(true);
      const response = await fetch('http://localhost:3001/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, token: code }),
      });
      const data = await response.json();
      setIsCorrect(data.verified);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className='register-section'>
        <div>
          <input
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={createUser}>Register</button>
        </div>
      </div>
      <hr />
      <div className='verify-section'>
        <div>
          <input
            placeholder='User ID'
            value={userId}
            onChange={(e) => setUserId(+e.target.value)}
            type='number'
          />
          <input
            placeholder='Code'
            value={code}
            type='number'
            onChange={(e) => setCode(e.target.value)}
          />
          <button onClick={verifyUser}>Verify</button>
          {wasChecked && (
            <p className={isCorrect ? 'correct' : 'incorrect'}>
              {isCorrect ? 'Correct' : 'Incorrect'}
            </p>
          )}
        </div>
      </div>
      <hr />
      <div className='users-section'>
        <h2>Users List</h2>
        <div className='users-list'>
          {users && users.map((user) => <User key={user.id} {...user} />)}
        </div>
      </div>
    </div>
  );
};

export default App;
