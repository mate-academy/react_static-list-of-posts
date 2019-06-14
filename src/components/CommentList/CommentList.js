import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import Comment from './Comment/Comment';

function CommentList(props) {
  return (
    props.comments.map(
      comment => (<Comment {...comment} key={comment.id} />))
  );
}

CommentList.propTypes = {
  comments: arrayOf(
    shape({
      id: number,
      name: string,
      email: string,
      body: string
    })).isRequired
};

export default CommentList;
