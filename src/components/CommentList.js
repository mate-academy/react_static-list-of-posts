import React from 'react';

const CommentList = params => (
  <div className="comment-list">
    {params.comments.map((comment) => {
      if (comment.postId === params.post.id) {
        return (
          <div className="comment">
            <div className="comment__email">{ comment.email }</div>
            <h2 className="comment__name">{ comment.name }</h2>
            <p className="comment__text">{ comment.body }</p>
          </div>
        );
      }

      return null;
    })}
  </div>
);

export default CommentList;
