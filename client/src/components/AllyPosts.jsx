import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllyPosts = () => {
    const [allyPosts, setAllyPosts] = useState([]);
    const [newPostContent, setNewPostContent] = useState('');
    const [newPostImage, setNewPostImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const fileInputRef = useRef(null); // Added useRef here for the file input

    const fetchAllyPosts = async () => {
        try {
            const response = await axios.get('http://localhost:8000/allypost/allyposts?limit=10', { withCredentials: true });
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
        const formData = new FormData();
        formData.append('content', newPostContent || '');
        if (newPostImage) {
            formData.append('image', newPostImage);
        }

        try {
            const response = await axios.post('http://localhost:8000/allypost/allypost', formData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setAllyPosts([response.data.allyPost, ...allyPosts]);
            setNewPostContent('');
            setNewPostImage(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = ''; 
            }
        } catch (error) {
            console.error('Error submitting post:', error);
        }
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="ally-posts-container">
            <form onSubmit={handleSubmitPost}>
                <input 
                    type="text" 
                    placeholder="Your Post Content" 
                    value={newPostContent} 
                    onChange={(e) => setNewPostContent(e.target.value)} 
                />
                <input 
                    type="file" 
                    onChange={(e) => setNewPostImage(e.target.files[0])} 
                    ref={fileInputRef} 
                />
                <button type="submit">Submit Post</button>
            </form>

            {allyPosts.map((post, index) => (
                <div key={index} className="ally-post">
                    <h3>{post.user.username}</h3>
                    <p>{post.content}</p>
                    {post.images && post.images.map((image, imgIndex) => (
                        <img key={imgIndex} src={`http://localhost:8000/${image.split('/').pop()}`} alt={`Post Image ${imgIndex}`} style={{ maxWidth: "300px", height: "auto" }} />
                    ))}
                </div>
            ))}
            <Link to="/see-all-ally-posts">See All</Link>
        </div>
    );
};

export default AllyPosts;




