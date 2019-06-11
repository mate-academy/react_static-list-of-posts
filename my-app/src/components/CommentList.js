import React from 'react';
import {comments} from '../comments';
import Comment from './Comment';

function CommentList(props) {
  const commentList = [];
  for (let comment of comments) {
    if (comment.postId === props.id) {
      commentList.push(
        <Comment comment={comment} key={comment.name}/>
      )
    }
  };
  return (
    <section>
      {commentList}
    </section>
  )
}

export default CommentList;
