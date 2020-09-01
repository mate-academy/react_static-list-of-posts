import React from 'react';
import Comment from './Comment';

const CommentList = (comments) => {
  const arrayComments = Object.values(comments);

  return (
    <div className="comments">
      <h3 className="comments__heading">Comments:</h3>
      {arrayComments.map(comment => (
        <div key={comment.id} className="comments__item">
          <hr />
          <Comment {...comment} />
        </div>
      ))}
    </div>
  );
};

export default CommentList;
