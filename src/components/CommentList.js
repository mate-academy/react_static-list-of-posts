import React from 'react';
import PropTypes from 'prop-types';
import Comments from './Comment';

function CommentsList({ comments }) {
  return (
    <div className="post__comments-block">
      {comments.map(comment => <Comments comment={comment} key={comment.id} />)}
    </div>
  );
}

// eslint-disable-next-line react/forbid-prop-types
CommentsList.propTypes = { comments: PropTypes.object.isRequired };

export default CommentsList;
