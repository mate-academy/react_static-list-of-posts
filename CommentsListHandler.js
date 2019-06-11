import React from 'react'; 
import { comments } from './comments.js';
import Comment from './Comment.js'

function CommentsListHandler(props){
  const currentPostComments = comments.filter(comment => comment.postId === props.postId);
  const commentsList = [];
  currentPostComments.map(item => {
    const commentator = item.email;
    commentsList.push(
      <Comment commentAuthor={commentator} commentBody={item.body} key={props.key}/>
    )
  })
  return commentsList;
}

export default CommentsListHandler;

