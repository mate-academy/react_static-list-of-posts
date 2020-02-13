import React from 'react';
import Comment from '../Comment/Comment';

const CommentList = ({ comments }) => (
  comments.map((comment) => {
    const { name, body, email, id } = comment;

    return <Comment key={id} name={name} body={body} email={email} />;
  })
);

export default CommentList;
