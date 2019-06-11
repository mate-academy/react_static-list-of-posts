import React from 'react'; 
import CommentsListHandler from './CommentsListHandler.js';

function PostHandler(props) {
  const {
    title: postTitle,
    body: postBody,
    userName: postAuthorName,
    userEmail: postAuthorEmail,
    userAddress: postAuthorAddress,
    postId: postId,
    id: id
  } = props;
  return (
    <div className="post-item">
      <h2 className="post-title">{postTitle}</h2>
      <p className="post-body">{postBody}</p>
      <ul className="post-author-info">
        <li>{postAuthorName}</li>
        <li>
          <a href="mailto:{postAuthorEmail}">{postAuthorEmail}</a>
        </li>
        <li>{postAuthorAddress}</li>
      </ul>
      <CommentsListHandler postId={postId} key={id} />
    </div>
  );
}

export default PostHandler;

