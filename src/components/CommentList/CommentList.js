import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment';
import './commentlist.css';

const CommentList = ({ comments = null }) => (
  <div className="comment-list">
    <h3>Comments</h3>
    <div className="comment-list__body">
      {comments && comments.map(item => <Comment item={item} />)}
    </div>
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
};

CommentList.defaultProps = {
  comments: null,
};

export default CommentList;
