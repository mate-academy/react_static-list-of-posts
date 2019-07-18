import React from 'react';
import PropTypes from 'prop-types';

const CommentList = props => (
  <div className="comment">
    <div className="comment__name">
      <span><b>Comment name : </b></span>
      <span>{props.name}</span>
    </div>
    <div className="post__body">
      <span><b>Comment body : </b></span>
      <span>{props.body}</span>
    </div>
  </div>
);

CommentList.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default CommentList;
