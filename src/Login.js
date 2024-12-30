
import './App.css'; 

import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 

    const [loginResponse, setLoginResponse] = useState({
        username: "",
        accessToken: "",
        refreshToken: "",
    });
    const [isAuthenticated, setIsAuthenticated] = useState('false');

    const clearForm = () => { 
        setUsername(""); 
        setPassword(""); 
      }; 

    const handleSubmit = (e) => { 
        e.preventDefault(); 
        alert("Logged in!"); 
        fetchData();
        clearForm(); 
      }; 

    const fetchData = () => {
        setIsAuthenticated('true');

        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({             
              username: username,
              password: password,
              expiresInMins: 30, // optional, defaults to 60
            }),
            // credentials: 'include' // Include cookies (e.g., accessToken) in the request
          })
          .then(res => res.json())
          .then((data) => console.log(data))
        .then((data) => setLoginResponse({
            username : data.username,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken
        }));

        // console.log(loginResponse);
    }

    React.useEffect(() => {
        fetchData();
      }, []);

    return  (
        <div>


            <form onSubmit={handleSubmit}> 
                <fieldset> 
                    <h2>Sign Up</h2> 
                    <div className="Field"> 
                    <label> 
                        User name <sup>*</sup> 
                    </label> 
                    <input 
                        value={username} 
                        onChange={(e) => { 
                            setUsername(e.target.value); 
                        }} 
                        placeholder="User name" 
                    /> 
                    </div> 
                    
                    <div className="Field"> 
                    <label> 
                        Password <sup>*</sup> 
                    </label> 
                    <input 
                        value={password.value} 
                        type="password" 
                        onChange={(e) => { 
                        setPassword({ ...password, value: e.target.value }); 
                        }} 
                        placeholder="Password" 
                    /> 
                    </div> 

                    <button type="submit"> 
                        Login
                    </button> 
                </fieldset> 
            </form> 
        </div>
    )
}
export default Login;
