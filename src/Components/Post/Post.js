import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Post = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);
    useEffect(() => {
        fetch("/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPostList(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading ...</div>;
    } else {
        return (
            <ul>
                {postList.map(post => (
                    <div className='Post'>
                        <li key={post.id}>
                            Title: {post.title} Text: {post.text}
                        </li>
                    </div>
                ))}
            </ul>
        );
    }
}

export default Post