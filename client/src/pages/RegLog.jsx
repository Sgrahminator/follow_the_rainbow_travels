import { useState } from 'react';
import axios from 'axios';

const RegLog = () => {
    const [registerData, setRegisterData] = useState({
        name: '', username: '', pronouns: '', membershipType: '', email: '', password: '', 
        confirmPassword: ''
    });
    const [registerErrors, setRegisterErrors] = useState({});
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [loginErrors, setLoginErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validateRegistration = (data) => {
        let errors = {};
        if (!data.name || data.name.length < 2) errors.name = 'Name is required and must be a minimum of 2 characters';
        if (!data.username || data.username.length < 2) errors.username = 'Username is required and must be a minimum of 2 characters';
        if (!data.pronouns) errors.pronouns = 'Pronouns are required';
        if (!data.membershipType) errors.membershipType = 'Membership Type is required';
        if (!data.email || data.email.length < 9 || !/\S+@\S+\.\S+/.test(data.email)) errors.email = 'Valid Email is required and must be a minimum of 9 characters';
        if (!data.password || data.password.length < 8 || !/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(data.password)) errors.password = 'Password is required, must be 8 characters, and a mix of upper/lower case and numbers';
        if (data.password !== data.confirmPassword) errors.confirmPassword = 'Passwords must match';
        return errors;
    };

    const validateLogin = (data) => {
        let errors = {};
        if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) errors.email = 'Valid Email is required';
        if (!data.password) errors.password = 'Password is required';
        return errors;
    };

    const handleRegisterChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
        setRegisterErrors({ ...registerErrors, [e.target.name]: '' });
    };

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
        setLoginErrors({ ...loginErrors, [e.target.name]: '' });
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateRegistration(registerData);
        if (Object.keys(newErrors).length > 0) {
            setRegisterErrors(newErrors);
        } else {
            try {
                await axios.post('http://localhost:8000/auth/register', registerData);
                setSuccessMessage('Registration Successful. Redirecting to login...');
                setTimeout(() => {
                    window.location.href = '/login'; // Redirect to /login
                }, 3000);
            } catch (err) {
                setRegisterErrors({ general: 'Registration failed' });
            }
        }
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateLogin(loginData);
        if (Object.keys(newErrors).length > 0) {
            setLoginErrors(newErrors);
        } else {
            try {
                await axios.post('http://localhost:8000/auth/login', loginData, { withCredentials: true });
                setSuccessMessage('Login Successful. Redirecting to home...');
                setTimeout(() => {
                    window.location.href = '/home'; // Redirect to /home
                }, 3000);
            } catch (err) {
                setLoginErrors({ general: 'Account not found or Login failed' });
            }
        }
    };

    return (
        <div> 
            <div className="forms-container">
                {/* Registration Form */}
                <div className="registration-form">
                <h3>For New Adventurers:</h3>
                <p>Not signed up yet? What are you waiting for? Become a part of our inclusive community 
                and gain access to a world of recommendations and experiences that you will not find 
                anywhere else. A place to feel safe, show support, and be yourself.</p>
                <form onSubmit={handleRegisterSubmit}>
                    <div>
                        <label>Name:</label>
                        <input name="name" value={registerData.name} onChange={handleRegisterChange} placeholder="Full Name" autoComplete="name" />
                        {registerErrors.name && <p style={{ color: 'red' }}>{registerErrors.name}</p>}
                    </div>
                    <div>
                        <label>Username:</label>
                        <input name="username" value={registerData.username} onChange={handleRegisterChange} placeholder="Username" autoComplete="Username" />
                        {registerErrors.username && <p style={{ color: 'red' }}>{registerErrors.username}</p>}
                    </div>
                    <div>
                        <label>Pronouns:</label>
                        <select name="pronouns" value={registerData.pronouns} onChange={handleRegisterChange}>
                            <option value="">Select Pronouns</option>
                            <option value="He/Him">He/Him</option>
                            <option value="She/Her">She/Her</option>
                            <option value="They/Them">They/Them</option>
                            <option value="Other">Other</option>
                        </select>
                        {registerErrors.pronouns && <p style={{ color: 'red' }}>{registerErrors.pronouns}</p>}
                    </div>
                    <div>
                        <label>Membership Type:</label>
                        <input type="radio" name="membershipType" value="LGBTQIA+" onChange={handleRegisterChange} /> LGBTQIA+
                        <input type="radio" name="membershipType" value="Ally" onChange={handleRegisterChange} /> Ally
                        {registerErrors.membershipType && <p style={{ color: 'red' }}>{registerErrors.membershipType}</p>}
                    </div>
                    <div>
                        <label>Email:</label>
                        <input name="email" value={registerData.email} onChange={handleRegisterChange} placeholder="Email" autoComplete="email" />
                        {registerErrors.email && <p style={{ color: 'red' }}>{registerErrors.email}</p>}
                    </div>
                    <div>
                        <label>Password:</label>
                        <input name="password" type="password" value={registerData.password} onChange={handleRegisterChange} placeholder="Password" autoComplete="new-password" />
                        {registerErrors.password && <p style={{ color: 'red' }}>{registerErrors.password}</p>}
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <input name="confirmPassword" type="password" value={registerData.confirmPassword} onChange={handleRegisterChange} placeholder="Confirm Password" autoComplete="new-password" />
                        {registerErrors.confirmPassword && <p style={{ color: 'red' }}>{registerErrors.confirmPassword}</p>}
                    </div>
                    <button type="submit">Register</button>
                </form>
                {registerErrors.general && <p style={{ color: 'red' }}>{registerErrors.general}</p>}
                </div>
                
                {/* Login Form */}
                <div className="login-form">
                    <h3>For Returning Users:</h3>
                    <p>Are you an explorer who has already joined our mission? Welcome back! Just enter your 
                    email and password below to jump right back into discovering and recommending LGBTQIA+ 
                    friendly and accepting spaces.</p>
                    <form onSubmit={handleLoginSubmit}>
                        <div>
                            <label>Email:</label>
                            <input name="email" value={loginData.email} onChange={handleLoginChange} placeholder="Email" autoComplete="email" />
                            {loginErrors.email && <p style={{ color: 'red' }}>{loginErrors.email}</p>}
                        </div>
                        <div>
                            <label>Password:</label>
                            <input name="password" type="password" value={loginData.password} onChange={handleLoginChange} placeholder="Password" autoComplete="current-password" />
                            {loginErrors.password && <p style={{ color: 'red' }}>{loginErrors.password}</p>}
                        </div>
                        <button type="submit">Login</button>
                    </form>
                    {loginErrors.general && <p style={{ color: 'red' }}>{loginErrors.general}</p>}
                </div>
            </div>

            <div className="additional-content">
                <h3>Membership Exclusivity for Your Safety</h3>
                <p>We are deeply committed to the safety and well-being of our community. Access to 
                specific content and features on Pride Worldwide is reserved exclusively for our 
                registered members. This level of exclusivity is necessary to ensure a secure, private, 
                and respectful environment. When you join us, you are not just gaining access to 
                reviews, recommendations, and safety tips; you are joining a protected network dedicated 
                to promoting LGBTQIA+ friendly spaces across the globe. We take your safety seriously 
                and work tirelessly to vet all contributions to our platform. So why not join us and 
                become part of a global community that thrives on respect, safety, and inclusivity?</p>

                <h3>Why Join?</h3>
                <p>Share your recommendations and reviews for LGBTQIA+ friendly places across categories 
                like bars, restaurants, vacations, and more.
                <br></br>
                Engage with a global community that is passionate about safe and welcoming spaces.
                <br></br>
                Explore highly-rated places that you might not know about.
                <br></br>
                Share or receive invaluable safety tips.
                <br></br>
                Learn and interact with allies in our Ally Corner.</p>

                <h3>Our Commitment to Safety and Respect</h3>
                <p>Our Commitment to Safety and Respect:
                We value each member as well as their privacy and safety. Rest assured that your 
                information will be kept secure. For more details, visit our Privacy Policy and Terms 
                of Service. In keeping with the spirit of our community, we emphasize respectful 
                interaction. Any form of harassment or bullying will not be tolerated.</p>
            </div>
            {successMessage && <p>{successMessage}</p>} {/* Display success message */}
        </div>
    );
};

export default RegLog;
