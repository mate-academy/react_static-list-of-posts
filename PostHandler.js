import React from 'react'; 
import CommentHandler from './CommentHandler.js';

function PostHandler(props) {
  return (
    <div className="post-item">
      <h2 className="post-title">{props.title}</h2>
      <p className="post-body">{props.body}</p>
      <ul className="post-author-info">
        <li>{props.userName}</li>
        <li><a href="mailto:{props.userEmail}">{props.userEmail}</a></li>
        <li>{props.userAddress}</li>
      </ul>
      <CommentHandler postId={props.postId} key={props.id}/>
    </div>
  );
}

export default PostHandler;

