import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = ({ comments }) => (
  <div>
    {' '}
COMMENTS
    {comments
      .map(singleComment => <Comment singleComment={singleComment} key={singleComment.id} />)} { /*eslint-disable-line*/}
  </div>

);

CommentList.propTypes = { comments: PropTypes.objectOf(PropTypes) };
CommentList.defaultProps = { comments: 'no comment' };
export default CommentList;
