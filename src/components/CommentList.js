import React from 'react';
import './CommentList.css';
import { comments } from '../comments';
import Comment from './Comment';

function CommentList(props) {
  const postsComments = comments.filter(comment => comment.postId === props.id);
  const commentList = [];
  postsComments.forEach(comment => commentList.push(Comment(comment)));

  return (
    <div className="comments">
      {commentList}
    </div>
  );
}

export default CommentList;
