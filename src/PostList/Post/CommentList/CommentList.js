import React from 'react';
import './CommentList.css';
import comments from '../../../api/comments';

export const CommentList = postId => (
  <div className="CommentList">
    {comments.map((comment) => {
      const title = (comment.name[0]).toUpperCase()
        + (comment.name).slice(1);
      const message = (comment.body[0]).toUpperCase()
        + (comment.body).slice(1);

      if (comment.postId === postId.postId) {
        return (
          <div className="CommentList__comment" key={comment.id}>
            <h3 className="CommentList__tittle">{title}</h3>
            <p>{message}</p>
            <div className="CommentList__mail">
              {comment.email}
            </div>
          </div>
        );
      }

      return (
        <div key={comment.id} />
      );
    })}
  </div>
);
