import React from 'react';
import User from '../User/User';
import './Post.scss';

function Post(post) {
  return (
    <div className="postList__post-body">
      <strong className="postList__post-title">
        {post.title}
      </strong>
      <p className="postList__post-title">
        {post.body}
      </p>
      <User {...post.user} />
    </div>
  );
}

export default Post;
