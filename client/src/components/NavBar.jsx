import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [userData, setUserData] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

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

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:8000/auth/logout', {
                method: 'GET',
                credentials: 'include',
            });
    
            if (!response.ok) {
                throw new Error('Logout failed');
            }
    
            navigate('/');
        } catch (error) {
            console.error('There was an error logging out:', error);
        }
    };

    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/category">Categories</Link></li>
                <li><Link to="/safety-tips">Safety Tips</Link></li>
                <li><Link to="/allycorner">Ally Corner</Link></li>
            </ul>

            <div className="profile-section">
                {userData ? (
                    <div>
                        <div 
                            className="profile-circle"
                            onClick={() => setShowDropdown(!showDropdown)}
                            style={{ backgroundImage: `url(http://localhost:8000/images/${userData.profileImage})` }}
                        ></div>
                        {showDropdown && (
                            <div className="dropdown-menu">
                                <Link to="/profile">Profile Page</Link>
                                <Link to="/logout" onClick={handleLogout}>Logout</Link>
                            </div>
                        )}
                    </div>
                ) : <p>Loading...</p>}
            </div>
        </nav>
    );
}

export default NavBar;
