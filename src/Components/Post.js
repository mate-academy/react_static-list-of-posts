import React from 'react';

const Post = ({ title, body }) => (
  <>
    <p>{title}</p>    
    <p>{body}</p> 
    <User />,
    <CommentList />   
  </>
);

export default Post;
