import PropTypes from 'prop-types';
import React from 'react';
import Comment from './Comment';

const CommentList = props => (
  <div className="ui container">
    <h2 className="ui header">
      <i aria-hidden="true" className="comments icon" />
      <div className="content">Comments</div>
    </h2>
    {props.commentList.map(currentComment => (
      <Comment comment={currentComment} key={currentComment.id} />))}
  </div>
);

CommentList.propTypes
  = { commentList: PropTypes.oneOfType([PropTypes.array]).isRequired };

export default CommentList;
