import React from 'react';
import './Comment.scss';

const Comment = ({ comm }) => {
  const {name,email,body}  = comm;
  return (
    <div className = 'comment'>
     <div className = 'comment__name'>{ name.charAt(0).toUpperCase() + name.slice(1) }</div>
     <div className = 'comment__body'>{ body.charAt(0).toUpperCase() + body.slice(1) }</div>
     <div className = 'comment__email'>{ email.charAt(0).toUpperCase() + email.slice(1) }</div>
    </div>
  )
}
export default Comment;
