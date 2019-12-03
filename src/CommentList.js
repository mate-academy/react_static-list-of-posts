import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = ({ post, comments }) => (
  <div className="post__comments comments">
    <h2 className="comments__title">Comments:</h2>
    {comments.filter(
      comment => comment.postId === post.id
    )
      .map(
        comment => <Comment comment={comment} />
      )}
  </div>
);

CommentList.propTypes = {
  post: PropTypes.objectOf(PropTypes.any),
  comments: PropTypes.arrayOf(PropTypes.object),
};

CommentList.defaultProps = {
  post: {},
  comments: [{}],
};

export default CommentList;
