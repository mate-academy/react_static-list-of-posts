import React from 'react';
import { ShapeComment } from '../Shapes';
import './Comment.css';

const Comment = ({ name, postId, body, email, id }) => (
  <li className="comment" key={postId}>
    <h3>{name}</h3>
    <a href="mailto:ask@htmlbook.ru">{email}</a>
    <p>{body}</p>
  </li>
);

Comment.propTypes = ShapeComment.isRequired;
export default Comment;
