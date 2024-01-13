import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DefaultProfileImages from './DefaultProfileImages'; // Import the DefaultProfileImages component
import './NavBar.css';

const NavBar = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    // useEffect hook for fetching user data on component mount
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:8000/user/profile', {
                    credentials: 'include',
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const userData = await response.json();
                setUserData(userData);
            } catch (error) {
                console.error('There was an error fetching the user data:', error);
            }
        };

        fetchUserData();
    }, []);

    // Function to handle logout
    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:8000/auth/logout', {
                method: 'GET',
                credentials: 'include', // to ensure cookies are sent with the request
            });
    
            if (!response.ok) {
                throw new Error('Logout failed');
            }
    
            // Assuming logout is successful, navigate to the login
            navigate('/'); // redirect to login page after logout
        } catch (error) {
            console.error('There was an error logging out:', error);
        }
    };

    // Function to handle image selection
    const handleImageSelection = async (imageName) => {
        try {
            const response = await fetch('http://localhost:8000/user/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // To include the session cookie
                body: JSON.stringify({ defaultImage: imageName })
            });
    
            if (!response.ok) {
                throw new Error('Failed to update profile image');
            }
    
            const updatedUserData = await response.json();
            setUserData(updatedUserData); // Update the userData state with the new data
        } catch (error) {
            console.error('There was an error updating the profile image:', error);
            // Optionally handle this error in the UI as well
        }
    };

    return (
        <nav className="navbar">
            <ul className="nav-links">
                {/* Navigation links */}
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/category">Categories</Link></li>
                <li><Link to="/safety-tips">Safety Tips</Link></li>
                <li><Link to="/allycorner">Ally Corner</Link></li>
            </ul>

            <div className="profile-section">
                {userData ? (
                    <div>
                        <img 
                        src={userData.profileImage ? `http://localhost:8000/uploads/${userData.profileImage}` : 'http://localhost:8000/images/New_Symrna_2.jpg'}
                        alt="Profile"
                        className="profile-image"
                    />
                    <div className="dropdown-menu">
                        <Link to="/profile">Profile</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    {/* Include DefaultProfileImages component */}
                    <DefaultProfileImages handleImageSelection={handleImageSelection} />
                    </div>
                ) : <p>Loading...</p>}
            </div>
        </nav>
    );
}

export default NavBar;
