import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SeeAllAllyQnAs = () => {
    const [allyQnAs, setAllyQnAs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAllyQnAs = async () => {
            try {
                const response = await axios.get('http://localhost:8000/allyquestionanswer/allyquestionanswer', { withCredentials: true });
                const sortedAllyQnAs = response.data.map(qna => ({
                    ...qna,
                    answers: qna.answers.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
                })).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setAllyQnAs(sortedAllyQnAs);
            } catch (error) {
                console.error('Error fetching Ally QnAs:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAllyQnAs();
    }, []);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="see-all-ally-qnas">
            <h1>All Ally Q&As</h1>
            {allyQnAs.length > 0 ? (
                allyQnAs.map((qna, index) => (
                    <div key={index} className="ally-qna">
                        <h3>{qna.question}</h3>
                        <p>Asked by: {qna.user.username}</p>
                        {qna.answers.map((answer, ansIndex) => (
                            <div key={ansIndex} className="ally-answer">
                                <p>{answer.answer}</p>
                                <p>- {answer.user.username}</p>
                            </div>
                        ))}
                    </div>
                ))
            ) : (
                <p>No Ally QnAs found.</p>
            )}
            <Link to="/allycorner">Back to Ally Corner</Link>
        </div>
    );
};

export default SeeAllAllyQnAs;
