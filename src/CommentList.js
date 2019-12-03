import PropTypes from 'prop-types';
import React from 'react';
import Comment from './Comment';

const CommentList = props => (
  <dl>
    {props.commentList.map(currentComment => (
      <Comment comment={currentComment} key={currentComment.id} />
    ))}
  </dl>
);

CommentList.propTypes
  = { commentList: PropTypes.oneOfType([PropTypes.array]).isRequired };

export default CommentList;
