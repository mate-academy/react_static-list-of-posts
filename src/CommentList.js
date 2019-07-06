import React from 'react';
import Comment from './Comment'

function CommentList({ commentL }) {
  return (
    <div>
       {commentL.map(item => (
          <Comment key={item.id} comment={item} />)
        )}
    </div>
  );
}

export default CommentList;
