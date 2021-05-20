import React from 'react';
import CommentList from '../CommentList/CommentList';
import User from '../User/User';

const PostList = ({ posts }) => (
  posts.map(post => (
    <ul>
      <li className="post-title">
        {post.title}
      </li>
      <div>
        {post.body}
      </div>

      <div className="user">
        <User {...post.user} key={post.id} />
      </div>

      <div>
        <CommentList comments={post.comments} />
      </div>
    </ul>
  ))
);

export default PostList;
