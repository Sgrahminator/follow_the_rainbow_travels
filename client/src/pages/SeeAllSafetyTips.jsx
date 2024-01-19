import { useState, useEffect } from 'react';

const SeeAllSafetyTips = () => {
    const [safetyTips, setSafetyTips] = useState([]);

    useEffect(() => {
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

    return (
        <div className="see-all-safety-tips">
            <h1>All Safety Tips</h1>
            <ul>
                {safetyTips.map((tip, index) => (
                    <li key={index}>{tip.tip}</li>
                ))}
            </ul>
        </div>
    );
};

export default SeeAllSafetyTips;
