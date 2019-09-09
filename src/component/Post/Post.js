import React from 'react';
import './Post.css';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';

function Post({ post }) {
  return (
    <div className="post">
      <User user={post.user} />
      <h2 className="post__title">{post.title}</h2>
      <p className="post__text">{post.body}</p>
      <CommentList comments={post.comments} />
    </div>
  );
}

export default Post;
