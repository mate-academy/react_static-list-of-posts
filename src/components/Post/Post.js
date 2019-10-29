import React from 'react';
import CommentList from '../CommentList/CommentList';
import User from '../User/User';

function Post({ post: { title, body, user, comments } }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
      <div>
        <User user={user}/>
      </div>
      <h3>Comments</h3>
      <CommentList commentList={comments}/>
    </>
  );
}

export default Post;
