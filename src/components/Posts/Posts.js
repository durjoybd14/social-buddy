import React from 'react';
import { useHistory } from 'react-router';

const Posts = (props) => {
    const { id, title, body } = props.post;
    const history = useHistory();
    const showDetails = (id) =>{
        const url = `post/${id}`;
        history.push(url);
    }
    return (
        <div>
            <h3>This is the {title} for <strong> id-{id}</strong> </h3>
            <p>{body}</p>
            <button onClick={() =>showDetails(id)}>Show Details</button>
        </div>
    );
};

export default Posts;