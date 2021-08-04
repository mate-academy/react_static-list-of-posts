import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => (
  <>
    <p className="coments">
      coments:
    </p>
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <Comment {...comment} />
        </li>
      ))}
    </ul>
  </>
);

export default CommentList;
