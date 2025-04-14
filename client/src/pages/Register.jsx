// import React from 'react'
// import { useState } from 'react'
// const Register = () => {
//     const [email, setEmail] = useState('');
//     const [fullName, setFullName] = useState('');
//     const [password, setPassword] = useState('');
//     const formSubmit = async (e) => {
//         e.preventDefault();
//         const res = await fetch('http://localhost:8080/signup', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 email,
//                 fullName,
//                 password
//             })
//         });
//         const data = await res.json();
//         if (res.status === 200) {
//             alert(data.message);
//         } else {
//             alert(data.message);
//         }
//     }
//   return (
//     <div>
//         <form onSubmit={formSubmit} className='flex flex-col gap-4 w-1/3 mx-auto mt-10'>
//             <label > Full Name</label>
//             <input type="text" onChange={(e)=>setFullName(e.target.value)} name="name" id="" placeholder='Full Name' className='border-2 border-gray-300 rounded-md p-2' />
//             <label > Email</label>
//             <input type="email" onChange={(e)=>setEmail(e.target.value)} name="email" id="" placeholder='Email' className='border-2 border-gray-300 rounded-md p-2' />
//             <label > Password</label>
//             <input type="password" onChange={(e)=>setPassword(e.target.value)} name="password" id="" placeholder='Password' className='border-2 border-gray-300 rounded-md p-2' />
//             <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>Register</button>
//         </form>
//     </div>
//   )
// }

// export default Register

import React, { useState } from 'react'

const Register = () => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const formSubmit = async (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!email || !fullName || !password) {
            setError('All fields are required');
            return;
        }
        
        setLoading(true);
        setError('');
        
        try {
            const res = await fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    fullName,
                    password
                }),
                credentials: 'include'
            });
            
            const data = await res.json();
            
            if (res.ok) {
                alert(data.message);
              
                setEmail('');
                setFullName('');
                setPassword('');
            } else {
                setError(data.message || 'Registration failed');
            }
        } catch (err) {
            setError('Server error. Please try again later.');
            console.error('Registration error:', err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <form onSubmit={formSubmit} className='flex flex-col gap-4 w-1/3 mx-auto mt-10'>
                {error && <div className="bg-red-100 text-red-700 p-2 rounded">{error}</div>}
                
                <label>Full Name</label>
                <input 
                    type="text" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)} 
                    name="name" 
                    placeholder='Full Name' 
                    className='border-2 border-gray-300 rounded-md p-2' 
                />
                
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
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>
        </div>
    )
}

export default Register