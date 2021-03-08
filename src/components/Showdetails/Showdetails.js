import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';

const Showdetails = () => {
    const {id} = useParams();

    const [posts, setPosts] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])

    const {title, body} = posts;

    const [comments, setcomments] = useState([]);
    useEffect(() => {
        const url = `http://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setcomments(data))
    },[])

    const {name, email,} = comments;

    
    
    return (
        <div>
           <h2>Show details for id {id}</h2> 
           <h1>{title}</h1>
           <h4>Total Comments {comments.length}</h4>
           {
               comments.map(comment => <Comments comment={comment}></Comments>)
           }
           
        </div>
    );
};

export default Showdetails;