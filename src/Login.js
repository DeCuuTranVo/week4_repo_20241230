import './App.css';

import React, {useState} from 'react';

function Login() {
    const [username, setUsername] = useState("emilys"); // Set default value using the example of the source of dummyjson.com
    const [password, setPassword] = useState("emilyspass"); // Set default value using the example of the source of dummyjson.com

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
        alert("Logged in!");  // For the logic, in the case of invalid credentials, do you think this alert is correct?
        fetchData();
        clearForm();
    };

    const fetchData = () => {
        setIsAuthenticated('true'); // Set the state to true if the user is authenticated, so in the case of invalid credentials, do you think this is correct?

        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password,
                expiresInMins: 30, // optional, defaults to 60
            }),
            // credentials: 'include' // Include cookies (e.g., accessToken) in the request
        })
            .then(res => res.json())
            .then((data) => {
                if (data && data.username && data.accessToken && data.refreshToken) {
                    setLoginResponse({
                        username: data.username,
                        accessToken: data.accessToken,
                        refreshToken: data.refreshToken
                    });
                } else {
                    console.error('Invalid response data', data);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    React.useEffect(() => {
        fetchData();
    }, []); // Empty array means this effect will run once

    return (
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
                            defaultValue={username} // just a convenience
                            type='text' // if login using email, change to 'email'
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
                            value={password}
                            defaultValue={password} // just a convenience
                            type="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
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
