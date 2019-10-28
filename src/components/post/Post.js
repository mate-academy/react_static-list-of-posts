import React from 'react';
import User from '../user/User';
import CommentList from '../commentList/CommentList';

const Post = ({ post }) => (
  <>
    <User user={post.user} />
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    <CommentList comments={post.comments} />
  </>
);

export default Post;
