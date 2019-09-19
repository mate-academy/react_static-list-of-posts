import React from 'react';
import User from '../User/User';
import './Post.css';
import CommentList from '../CommentList/CommentList';

const Post = ({ post }) => (
  <div className="post-card">
    <User user={post.user} />
    <hr />
    <div className="post-card__header">
      <h3>{post.title}</h3>
    </div>
    <div className="post-card__body">
      <p>
        {post.body}
      </p>
    </div>
    <hr />
    <div className="post-card__comments">
      <h4>Comments</h4>
      <CommentList comments={post.comments} />
    </div>
  </div>
);

export default Post;
