import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('http://localhost:8080/', {
          method: 'GET',
          credentials: 'include' 
        });

        if (!response.ok) {
          
          navigate('/login');
        }

        const data = await response.json();
        setData(data.profileData);
        console.log('Home data:', data);
      } catch (error) {
        console.error('Error accessing home:', error);
        navigate('/login');
      }
    };

    checkAuth();
  }, [navigate]);

  return (
    <div>
      {data && Object.keys(data).length > 0 ? (
        <div>
          <h1>Welcome, {data.fullName  }</h1>
          <p>Email: {data.email || 'N/A'}</p>
          
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default Home;