import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllyQnA = () => {
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState('');
    const [newAnswers, setNewAnswers] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const fetchQuestions = async () => {
        try {
            const response = await axios.get('http://localhost:8000/allyquestionanswer', { withCredentials: true });
            setQuestions(response.data);
        } catch (error) {
            console.error('Error fetching questions:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchQuestions();
    }, []);

    const handleNewQuestionSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/allyquestionanswer', { question: newQuestion }, { withCredentials: true });
            setNewQuestion('');
            fetchQuestions();
        } catch (error) {
            console.error('Error submitting new question:', error);
        }
    };

    const handleNewAnswerSubmit = async (questionId) => {
        const answerText = newAnswers[questionId];
        if (!answerText) return;

        try {
            await axios.post(`http://localhost:8000/allyquestionanswer/${questionId}/answer`, { answer: answerText }, { withCredentials: true });
            setNewAnswers({ ...newAnswers, [questionId]: '' });
            fetchQuestions();
        } catch (error) {
            console.error('Error submitting new answer:', error);
        }
    };

    const editAnswer = async (questionId, answerId) => {
        const newAnswerText = newAnswers[answerId];
        if (!newAnswerText) return;

        try {
            await axios.put(`http://localhost:8000/allyquestionanswer/${questionId}/answer/${answerId}`, 
                            { answer: newAnswerText }, 
                            { withCredentials: true });
            setNewAnswers({ ...newAnswers, [answerId]: '' });
            fetchQuestions();
        } catch (error) {
            console.error('Error editing answer:', error);
        }
    };
    
    const deleteAnswer = async (questionId, answerId) => {
        try {
            await axios.delete(`http://localhost:8000/allyquestionanswer/${questionId}/answer/${answerId}`, 
                                { withCredentials: true });
            fetchQuestions();
        } catch (error) {
            console.error('Error deleting answer:', error);
        }
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="ally-qna-container">
            <form onSubmit={handleNewQuestionSubmit}>
                <input 
                    type="text" 
                    placeholder="Your Question" 
                    value={newQuestion} 
                    onChange={(e) => setNewQuestion(e.target.value)} 
                />
                <button type="submit">Ask Question</button>
            </form>

            {questions.map((question) => (
                <div key={question._id} className="ally-question">
                    <h3>{question.question}</h3>
                    <p>Asked by: {question.user.username}</p>
                    {question.answers.map((answer) => (
                        <div key={answer._id} className="ally-answer">
                        <p>{answer.answer}</p>
                        <p>- {answer.user.username}</p>
                        <input 
                            type="text" 
                            value={newAnswers[answer._id] || ''} 
                            onChange={(e) => setNewAnswers({ ...newAnswers, [answer._id]: e.target.value })} 
                        />
                        <button onClick={() => editAnswer(question._id, answer._id)}>Edit</button>
                        <button onClick={() => deleteAnswer(question._id, answer._id)}>Delete</button>
                    </div>
                ))}
                <div className="new-answer-section">
                    <input 
                        type="text" 
                        placeholder="Your Answer" 
                        value={newAnswers[question._id] || ''} 
                        onChange={(e) => setNewAnswers({ ...newAnswers, [question._id]: e.target.value })} 
                    />
                    <button onClick={() => handleNewAnswerSubmit(question._id)}>Submit Answer</button>
                </div>
            </div>
        ))}
        <Link to="/allyquestionanswer/all">See All</Link>
    </div>
);
};

export default AllyQnA;
