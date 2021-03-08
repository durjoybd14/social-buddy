import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

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
    
    return (
        <div>
           <h2>Show details for id {id}</h2> 
           <h1>{title}</h1>
           <p>{body}</p>
        </div>
    );
};

export default Showdetails;