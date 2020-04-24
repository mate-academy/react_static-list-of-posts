import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';

const CommentList = ({ userComments }) => (
  <>
    {userComments.map(comment => (
      <Comment
        key={comment.id}
        {...comment}
      />
    ))}
  </>
);

export default CommentList;

CommentList.propTypes = {
  userComments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
