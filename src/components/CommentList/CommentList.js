import React from 'react';

import PropTypes from 'prop-types';

import Comment from '../Comment/Comment';

function CommentList({ comments }) {
  return (
    <div>
      {comments
        .map(comment => (<Comment comment={comment} key={comment.id} />))
      }
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};

export default CommentList;
