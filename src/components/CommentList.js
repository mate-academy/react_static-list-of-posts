import React from 'react';
import { Comment } from './Comment';

export function CommentList(props) {
  const { comments } = props;
  const commetsList = comments.map(comment => <Comment {...comment} key={comment.email} />)

  return (
    <div className="comments" >
      <h2>Comments</h2>
      {commetsList} 
    </div>
  );
}
