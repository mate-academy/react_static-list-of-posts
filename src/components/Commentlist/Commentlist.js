import React from 'react';
import Comment from '../Comment/Comment';

function Commentlist( {comment} ) {
  return (
    <div className="comments">
      <Comment comment={comment} />
    </div>
  );
}

export default Commentlist;
