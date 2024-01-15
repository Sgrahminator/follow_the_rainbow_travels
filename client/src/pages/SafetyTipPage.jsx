import { useState, useEffect } from 'react';
import SafetyTips from '../components/SafetyTips';

const SafetyTipPage = () => {
    const [safetyTips, setSafetyTips] = useState([]);

    useEffect(() => {
        // Fetch existing safety tips when the component mounts
        const fetchSafetyTips = async () => {
            try {
                const response = await fetch('http://localhost:8000/safetytips/safetytip', {
                    credentials: 'include',
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch safety tips');
                }

                const data = await response.json();
                setSafetyTips(data);
            } catch (error) {
                console.error('Error fetching safety tips:', error);
            }
        };

        fetchSafetyTips();
    }, []);

    const handleTipSubmit = async (tip) => {
        try {
            const response = await fetch('http://localhost:8000/safetytips/safetytip', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ tip }),
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Failed to submit safety tip');
            }

            const newTip = await response.json();
            setSafetyTips([...safetyTips, newTip]);
        } catch (error) {
            console.error('Error submitting safety tip:', error);
        }
    };

    return (
        <div className="safety-tip-page">
            <h1>Safety First, Always</h1>
            <p>At Follow The Rainbow Travels, we prioritize the well-being of our members. Whether 
            you are exploring a new destination or engaging with others online, we want you to do so 
            safely. Below are some safety guidelines we recommend:</p>
            
            <h2>Online Interactions:</h2>
            <p>Always protect your personal information. Avoid sharing addresses, phone numbers, or 
            financial details unless you are sure about the site security and the person you are 
            communicating with.</p>

            <h2>Meet-up Safety:</h2>
            <p>If you are meeting someone from the platform or any social media app, always meet in 
            public places and let someone you trust know where you will be.</p>

            <h2>Check Reviews and Ratings:</h2>
            <p>Before visiting a place you found on the platform, check reviews and ratings. Make sure 
            multiple people vouch for its LGBTQIA+ friendliness.</p>

            <h2>Local Laws and Customs:</h2>
            <p>Always research the local laws and customs related to LGBTQIA+ rights when you are 
            visiting a new country or city. This is especially important for countries where same-sex 
            relationships or LGBTQIA+ activities are criminalized.</p>

            <h2>Be Cautious While Traveling:</h2>
            <p>Use registered and trusted transport services, especially when arriving in a new place. 
            It may be worth splurging a bit on trusted companies rather than taking a risk with an 
            unknown service.</p>

            <h2>Emergency Contacts:</h2>
            <p>Always have local emergency numbers and the number for the embassy for your country when 
            traveling abroad.</p>

            <h2>Report Incidents:</h2>
            <p>If you face discrimination or harassment, report it to local authorities and alert the 
            community by sharing your experience on the platform (if you are comfortable doing so).</p>

            <h2>Secure Your Account:</h2>
            <p>Use strong, unique passwords and consider enabling two-factor authentication for added 
            security.</p>

            <h2>Health Precautions:</h2>
            <p>If you are attending events, especially in closed spaces, follow health guidelines such 
            as wearing masks and social distancing, as applicable.</p>

            <h2>Alcohol and Substance Use:</h2>
            <p>Be mindful of your alcohol and substance use, particularly in unfamiliar settings.</p>

            <h2>Trust Your Gut:</h2>
            <p>If something feels off, it probably is. Always trust your instincts.</p>

            <h2>Family and Friends:</h2>
            <p>Let someone you trust know your itinerary and check-in regularly, especially if you are 
            exploring a new place or meeting new people.</p>

            <h2>Accessibility:</h2>
            <p>Check in advance if the places you are visiting are accessible if you or someone you are 
            with has special accessibility needs.</p>

            {/* Safety Tips Submission */}
            <SafetyTips onTipSubmit={handleTipSubmit} />

            {/* Displaying Submitted Safety Tips */}
            <section>
                <h2>User-Submitted Safety Tips</h2>
                <ul>
                    {safetyTips.map((tip, index) => (
                        <li key={index}>{tip.tip}</li>
                    ))}
                </ul>
            </section>

            <h2>Respect & Community:</h2>
            <p>Spread Love, Not Hate: Our platform thrives on positivity. Engage respectfully and 
            kindly. Remember, bullying or disrespect will not be tolerated.</p>

            <h2>Report & Support:</h2>
            <p>Help us maintain a safe space. Report any inappropriate behavior, and we will take necessary 
            action.</p>

            <h2>Conclusion:</h2>
            <p>Safety is a collective responsibility. While we strive to ensure Follow The Rainbow 
            Travels remains a safe haven, your awareness and prudence play an integral role. Let us 
            together create a safe and welcoming space for everyone!</p>
        </div>
    );
};

export default SafetyTipPage;
