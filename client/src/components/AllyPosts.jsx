import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllyPosts = () => {
    const [allyPosts, setAllyPosts] = useState([]);
    const [newPostContent, setNewPostContent] = useState('');
    const [newPostImage, setNewPostImage] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const fetchAllyPosts = async () => {
        try {
            const response = await axios.get('http://localhost:8000/allyposts', { withCredentials: true });
            setAllyPosts(response.data);
        } catch (error) {
            console.error('Error fetching ally posts:', error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchAllyPosts();
    }, []);

    const handleSubmitPost = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/allypost', 
                { content: newPostContent, images: [newPostImage] }, 
                { withCredentials: true });
            setNewPostContent('');
            setNewPostImage('');
            fetchAllyPosts(); 
        } catch (error) {
            console.error('Error submitting post:', error);
        }
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="ally-posts-container">
            {/* Form for submitting a new ally post */}
            <form onSubmit={handleSubmitPost}>
                <input 
                    type="text" 
                    placeholder="Your Post Content" 
                    value={newPostContent} 
                    onChange={(e) => setNewPostContent(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Image URL" 
                    value={newPostImage} 
                    onChange={(e) => setNewPostImage(e.target.value)} 
                />
                <button type="submit">Submit Post</button>
            </form>

            {allyPosts.map((post) => (
                <div key={post._id} className="ally-post">
                    <h3>{post.user.username}</h3>
                    <p>{post.content}</p>
                    {post.images && post.images.map((image, index) => (
                        <img key={index} src={image} alt={`Post ${post._id} Image ${index}`} />
                    ))}
                    <Link to={`/allypost/${post._id}`}>View Post</Link>
                </div>
            ))}
            <Link to="/allypost/allyposts">See All</Link>
        </div>
    );
};

export default AllyPosts;
