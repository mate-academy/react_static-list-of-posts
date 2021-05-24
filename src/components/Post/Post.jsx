import React from 'react';
import Author from '../Author/Author';
import CommentList from '../CommentList/CommentList';

const Post = ({ title, body, author, comments }) => (
  <li>
    <h2>{title}</h2>
    <p>{body}</p>
    <span>Author info:</span>
    <Author {...author}/>
    <p>Comments:</p>
    <CommentList comments={comments}/>
  </li>
);

export default Post;
