import React, { useState } from 'react'
import { useNavigate  } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState('');  
    const navigate = useNavigate();
    const formSubmit = async (e) => {
        e.preventDefault();
        
        if (!email || !password) {
            setError('Email and password are required');
            return;
        }
        
        setLoading(true);
        setError('');
        
        try {
            const response = await fetch('http://localhost:8080/login', {  
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password  
                }),
                credentials: 'include'
            });
            
            const data = await response.json();
            
            if (response.ok) {
                 
                localStorage.setItem('token', data.token);
                navigate('/')
                setEmail('');
                setPassword('');
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            setError('Server error. Please try again later.');
            console.log(err);
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <div>
            <form onSubmit={formSubmit} className='flex flex-col gap-4 w-1/3 mx-auto mt-10'>
                {error && <div className="bg-red-100 text-red-700 p-2 rounded">{error}</div>}
                
                <label>Email</label>
                <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    name="email" 
                    placeholder='Email' 
                    className='border-2 border-gray-300 rounded-md p-2' 
                />
                
                <label>Password</label>
                <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    name="password" 
                    placeholder='Password' 
                    className='border-2 border-gray-300 rounded-md p-2' 
                />
                
                <button 
                    type='submit' 
                    disabled={loading}
                    className={`${loading ? 'bg-blue-300' : 'bg-blue-500'} text-white p-2 rounded-md`}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    )
}

export default Login