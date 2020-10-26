import React from 'react';
import CommentShape from './PropTypes/CommentShape';

const Comment = ({ name, body, email }) => (
  <p>
    <span>{name}</span>
    <a href={`mailto=${email}`}>{` ${email} `}</a>
    <span>{body}</span>
  </p>
);

Comment.propTypes = CommentShape;

export default Comment;
