import React from 'react';
import CommentShape from '../../shapes/CommentShape';

const Comment = ({ name, body, email }) => (
  <section className="p-3 mb-1 rounded border bg-secondary">
    <p className="font-italic font-weight-bold">{name}</p>
    <p className="font-italic">{body}</p>
    <p className="text-right small">{email}</p>
  </section>
);

Comment.propTypes = CommentShape;

export default Comment;
