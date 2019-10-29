import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

export default function CommentList({ commentList }) {
  return (
    <div className="comment-list">
      <div>COMENTS EPT</div>
      {commentList.map(
        comment => <Comment comment={comment} key={comment.id} />
      )}
    </div>
  );
}

CommentList.propTypes = {
  commentList: PropTypes.instanceOf(Array).isRequired,
};
