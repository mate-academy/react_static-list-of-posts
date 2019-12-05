import PropTypes from 'prop-types';
import React from 'react';
import Comment from './Comment';

const CommentList = props => (
  <>
    <h2 className="ui header">
      <i aria-hidden="true" className="comments icon" />
      <div className="content">Comments</div>
    </h2>
    <div className="ui container">
      {props.commentList.map(currentComment => (
        <Comment comment={currentComment} key={currentComment.id} />
      ))}
    </div>
  </>
);

CommentList.propTypes
  = { commentList: PropTypes.oneOfType([PropTypes.array]).isRequired };

export default CommentList;
