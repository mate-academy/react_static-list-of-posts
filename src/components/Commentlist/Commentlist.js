import React from 'react';
import Comment from '../Comment/Comment';

function Commentlist(props) {
  const {comment} = props;
  return (
    <div className="comments">
      <Comment comment={comment} />
    </div>
  );
}

export default Commentlist;
