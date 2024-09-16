import React from 'react'; 
import CommentsList from './CommentsList.js';

function Post(props) {
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
          <a href="mailto:{props.userEmail}">{postAuthorEmail}</a>
        </li>
        <li>{postAuthorAddress}</li>
      </ul>
      <CommentsList postId={postId} key={id} />
    </div>
  );
}

export default Post;

