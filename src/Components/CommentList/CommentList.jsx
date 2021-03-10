import PropTypes from 'prop-types';
import React from 'react';
import Comment from '../Comment';
import { CommentType } from '../CommentType/CommentType';

export default function CommentList({ comments }) {
  const commentPost = comments.map(comment => (
    <Comment key={comment.id} comment={comment} />
  ));

  return (
    <>
      <p>Comment:</p>
      <ul>
        {commentPost}
      </ul>
    </>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentType).isRequired,
};
