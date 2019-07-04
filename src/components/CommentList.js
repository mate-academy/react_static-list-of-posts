import React from 'react';

import Comment from './Comment';

const CommentList = params => (
  <div className="comment-list">
    {params.comments.map((comment) => {
      if (comment.postId === params.post.id) {
        return <Comment comment={comment} />;
      }

      return null;
    })}
  </div>
);

export default CommentList;
