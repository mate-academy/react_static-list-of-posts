import PropTypes from 'prop-types';
import React from 'react';
import Comment from './Comment';

const CommentList = props => (
  <dl className="comment">
    {props.commentList.map(comment => (
      <Comment comment={comment} key={comment.id} />
    ))}
  </dl>
);

CommentList.propTypes
  = { commentList: PropTypes.oneOfType([PropTypes.array]).isRequired };

export default CommentList;
