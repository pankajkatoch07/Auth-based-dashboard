
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


function Login() {
    const [email,setEmail] = useState("");
    const navigate = useNavigate();
    const {login} = useAuth();

    function handleSubmit(e) {
        e.preventDefault();

        if(!email) return;

        login(email);
        navigate("/dashboard");
    }

    return (
        <div className='login-container'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default Login;