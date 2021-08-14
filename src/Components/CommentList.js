import React from 'react';
import Comment from './Comment';

const CommentList = () => (
  <ul>
    {Comment.map(comment => (
      <li key={comment.id}>
        <Comment{...comment} />    
      </li> 
    ))}      
  </ul>     
);

export default CommentList;
