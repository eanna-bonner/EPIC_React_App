import { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch('https://i5xzaxat8e.execute-api.us-east-1.amazonaws.com/EPIC_Login_Auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
        const data = await response.json();
        // handle successful signup
        // for example, you might want to log the response data:
        console.log(data);
      } else {
        // handle error
        // if the server returns a message in the response body, you can log it:
        const errorData = await response.json();
        console.log(errorData);
      }
  };

  return (
    <>
      <Header />
      <div> 
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit">Sign Up</button>
        </form>          
      </div>
      <Footer />
    </>
  );
};