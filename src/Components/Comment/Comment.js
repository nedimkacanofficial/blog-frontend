import React from 'react'
import { useState, useEffect } from 'react';

const Comment = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [commentList, setCommentList] = useState([]);
    useEffect(() => {
        fetch("/comments")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setCommentList(result);
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
                {commentList.map(comment => (
                    <div className='Comments'>
                        <li key={comment.id}>
                            Text: {comment.text}
                        </li>
                    </div>
                ))}
            </ul>
        );
    }
}

export default Comment