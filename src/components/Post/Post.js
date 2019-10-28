import React from 'react';
import './Post.css';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';

function Post(props) {
  // eslint-disable-next-line react/prop-types
  const { post } = props;

  return (
    <li className="post">
      <header className="post-header">
        {post.title}
      </header>
      <p className="post-body">
        {post.body}
      </p>
      <User user={post.user} showAddress />
      <CommentList commentList={post.comments} />
    </li>
  );
}

export default Post;
