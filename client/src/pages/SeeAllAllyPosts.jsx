import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SeeAllAllyPosts = () => {
    const [allyPosts, setAllyPosts] = useState([]);

    useEffect(() => {
        const fetchAllyPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/allypost/allyposts', {
                    withCredentials: true,
                });

                if (response.status !== 200) {
                    throw new Error('Failed to fetch ally posts');
                }

                setAllyPosts(response.data);
            } catch (error) {
                console.error('Error fetching ally posts:', error);
            }
        };

        fetchAllyPosts();
    }, []);

    return (
        <div className="see-all-ally-posts">
            <h1>All Ally Posts</h1>
            {allyPosts.length > 0 ? (
                <div>
                    {allyPosts.map((post, index) => (
                        <div key={index} className="ally-post">
                            <h3>{post.user.username}</h3>
                            <p>{post.content}</p>
                            {post.images && post.images.map((image, imgIndex) => (
                                <img key={imgIndex} src={`http://localhost:8000/${image.split('/').pop()}`} alt={`Post Image ${imgIndex}`} style={{ maxWidth: "300px", height: "auto" }} />
                            ))}
                        </div>
                    ))}
                </div>
            ) : (
                <p>No ally posts found.</p>
            )}
            <Link to="/allycorner">Back to Ally Corner</Link>
        </div>
    );
};

export default SeeAllAllyPosts;

