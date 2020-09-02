import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function CommentList({ coments, currentPost }) {
  return (
    coments.filter(elem => elem.postId === currentPost.id).map(item => (
      <Comment {...item} />
    ))
  );
}

CommentList.propTypes = {
  coments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      body: PropTypes.string,
      email: PropTypes.string,
    }),
  ).isRequired,
  currentPost: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    user: PropTypes.string,
  }),
};

export default CommentList;
