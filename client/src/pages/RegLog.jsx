import { useState } from 'react';
import axios from 'axios';

const RegLog = () => {
    const [registerData, setRegisterData] = useState({
        name: '', username: '', pronouns: '', membershipType: '', email: '', password: '', confirmPassword: ''
    });
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleRegisterChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post('/auth/register', registerData);
        // Redirect or show success message
        console.log('Registration Success:', response.data);
        } catch (err) {
        setError(err.response?.data?.error || 'Registration failed');
        }
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post('/auth/login', loginData, { withCredentials: true });
        // Redirect or show success message
        console.log('Login Success:', response.data);
        } catch (err) {
        setError(err.response?.data?.error || 'Login failed');
        }
    };

    return (
        <div>

            <div>
                <h3>For New Adventurers:</h3>
                <p>Not signed up yet? What are you waiting for? Become a part of our inclusive community 
                and gain access to a world of recommendations and experiences that you will not find 
                anywhere else. A place to feel safe, show support, and be yourself.</p>
                <form onSubmit={handleRegisterSubmit}>
                <input name="name" value={registerData.name} onChange={handleRegisterChange} placeholder="Full Name" />
                <input name="username" value={registerData.username} onChange={handleRegisterChange} placeholder="Username" />
                <select name="pronouns" value={registerData.pronouns} onChange={handleRegisterChange}>
                    <option value="">Select Pronouns</option>
                    <option value="He/Him">He/Him</option>
                    <option value="She/Her">She/Her</option>
                    <option value="They/Them">They/Them</option>
                    <option value="Other">Other</option>
                </select>
                <input type="radio" name="membershipType" value="LGBTQIA+" onChange={handleRegisterChange} /> LGBTQIA+
                <input type="radio" name="membershipType" value="Ally" onChange={handleRegisterChange} /> Ally
                <input name="email" value={registerData.email} onChange={handleRegisterChange} placeholder="Email" />
                <input name="password" type="password" value={registerData.password} onChange={handleRegisterChange} placeholder="Password" />
                <input name="confirmPassword" type="password" value={registerData.confirmPassword} onChange={handleRegisterChange} placeholder="Confirm Password" />
                <button type="submit">Register</button>
                </form>
                {error && <p>{error}</p>}
            </div>

            <div>
                <h3>For Returning Users:</h3>
                <p>Are you an explorer who has already joined our mission? Welcome back! Just enter your 
                email and password below to jump right back into discovering and recommending LGBTQIA+ 
                friendly and accepting spaces.</p>
                <form onSubmit={handleLoginSubmit}>
                <input name="email" value={loginData.email} onChange={handleLoginChange} placeholder="Email" />
                <input name="password" type="password" value={loginData.password} onChange={handleLoginChange} placeholder="Password" />
                <button type="submit">Login</button>
                </form>
                {error && <p>{error}</p>}
            </div>

            <div>
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
                <break></break>
                Engage with a global community that is passionate about safe and welcoming spaces.
                <break></break>
                Explore highly-rated places that you might not know about.
                <break></break>
                Share or receive invaluable safety tips.
                <break></break>
                Learn and interact with allies in our Ally Corner.</p>

                <h3>Our Commitment to Safety and Respect</h3>
                <p>Our Commitment to Safety and Respect:
                We value each member as well as their privacy and safety. Rest assured that your 
                information will be kept secure. For more details, visit our Privacy Policy and Terms 
                of Service. In keeping with the spirit of our community, we emphasize respectful 
                interaction. Any form of harassment or bullying will not be tolerated.</p>
            </div>
        </div>
    );
};

export default RegLog;