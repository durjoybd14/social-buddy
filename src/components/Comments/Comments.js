import React from 'react';

const Comments = (props) => {
    const {name, email, body} = props.comment;
    return (
        <div>
            <h5>Name:{name} E-mail:{email}</h5>
            <p>{body}</p>
        </div>
    );
};

export default Comments;