import React from 'react'; 
import { comments } from './comments.js';
import CommentHandler from './CommentHandler.js';

function CommentsListHandler(props){
  const {
    postId: currentPostId,
    key: currentPostKey
  } = props;

  const currentPostComments = comments.filter(comment => comment.postId === currentPostId);

  const commentsList = [];

  currentPostComments.map(item => {
    const {
      email: commentator,
      body: commentBody
    } = item;

    commentsList.push(
      <CommentHandler commentAuthor={commentator} commentBody={commentBody} key={currentPostKey} />
    );
  });
  return commentsList;
}

export default CommentsListHandler;

