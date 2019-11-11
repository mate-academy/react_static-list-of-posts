import React from 'react';

import Comment from './Comment';

// eslint-disable-next-line react/prop-types
function CommentsList({ commentsList }) {
  return (
    <h6>
      {commentsList.map(comment => (
        <Comment
          commentName={comment.name}
          commentEmail={comment.email}
          commentBody={comment.body}
          key={comment.id}
        />
      ))}
    </h6>
  );
}

export default CommentsList;
