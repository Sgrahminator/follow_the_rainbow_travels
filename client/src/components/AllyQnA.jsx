import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllyQnA = () => {
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [newAnswers, setNewAnswers] = useState({});

    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        try {
            const response = await axios.get('http://localhost:8000/allyquestionanswer/allyquestionanswer?limit=10', { withCredentials: true });
            const sortedQuestions = response.data.map(question => ({
                ...question,
                answers: question.answers.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
            })).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setQuestions(sortedQuestions);
        } catch (error) {
            console.error('Error fetching questions:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleNewQuestionSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/allyquestionanswer/allyquestionanswer', { question: newQuestion }, { withCredentials: true });
            setNewQuestion('');
            fetchQuestions();
        } catch (error) {
            console.error('Error submitting new question:', error);
        }
    };

    const handleNewAnswerSubmit = async (questionId, answerText) => {
        if (!answerText) return;
        try {
            await axios.post(`http://localhost:8000/allyquestionanswer/allyquestionanswer/${questionId}/answer`, { answer: answerText }, { withCredentials: true });
            fetchQuestions();
        } catch (error) {
            console.error('Error submitting new answer:', error);
        }
    };

    const editAnswer = async (questionId, answerId) => {
        const answer = questions.find(q => q._id === questionId).answers.find(a => a._id === answerId);
        const newAnswerText = prompt("Edit your answer:", answer ? answer.answer : "");
        if (!newAnswerText) return;

        try {
            await axios.put(`http://localhost:8000/allyquestionanswer/allyquestionanswer/${questionId}/answer/${answerId}`, { answer: newAnswerText }, { withCredentials: true });
            fetchQuestions();
        } catch (error) {
            console.error('Error editing answer:', error);
        }
    };

    const editQuestion = async (questionId) => {
        const question = questions.find(q => q._id === questionId);
        const newQuestionText = prompt("Edit your question:", question ? question.question : "");
        if (!newQuestionText) return;

        try {
            await axios.put(`http://localhost:8000/allyquestionanswer/allyquestionanswer/${questionId}`, { question: newQuestionText }, { withCredentials: true });
            fetchQuestions();
        } catch (error) {
            console.error('Error editing question:', error);
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
                    <button onClick={() => editQuestion(question._id)}>Edit Question</button>
                    {question.answers.map((answer) => (
                        <div key={answer._id} className="ally-answer">
                            <p>{answer.answer}</p>
                            <p>- {answer.user.username}</p>
                            <button onClick={() => editAnswer(question._id, answer._id)}>Edit</button>
                        </div>
                    ))}
                    <div className="new-answer-section">
                        <input 
                            type="text" 
                            placeholder="Your Answer" 
                            value={newAnswers[question._id] || ''} 
                            onChange={(e) => {
                                const updatedAnswers = {...newAnswers};
                                updatedAnswers[question._id] = e.target.value;
                                setNewAnswers(updatedAnswers);
                            }} 
                        />
                        <button onClick={() => {
                            handleNewAnswerSubmit(question._id, newAnswers[question._id]);
                            const updatedAnswers = {...newAnswers};
                            updatedAnswers[question._id] = '';
                            setNewAnswers(updatedAnswers);
                        }}>Submit Answer</button>
                    </div>
                </div>
            ))}
            <Link to="/see-all-question-answers">See All</Link>
        </div>
    );
};

export default AllyQnA;
