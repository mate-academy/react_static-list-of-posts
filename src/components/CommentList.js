import React from 'react';
import { comments } from '../comments';
import Comment from './Comment';

export default  function CommentList(props) {
  const userComments = comments.filter(comment => comment.postId === props.id);
  const commentList = [];
  userComments.forEach(comment => commentList.push(Comment(comment)));

  return (
    <div>
      {commentList}
    </div>
  );
}
