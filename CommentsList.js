import React from 'react'; 
import { comments } from './comments.js';
import Comment from './Comment.js';

function CommentsList(props){
  const {
    postId: currentPostId,
    key: currentPostKey
  } = props;

  const currentPostComments = comments.filter(comment => comment.postId === currentPostId);

  const postComments = [];

  currentPostComments.forEach(item => {
    const {
      email: commentator,
      body: commentBody
    } = item;

    postComments.push(
      <Comment commentAuthor={commentator} commentBody={commentBody} key={currentPostKey} />
    );
  });
  return postComments;
}

export default CommentsList;

