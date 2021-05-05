import React from 'react';
import posts from '../api/posts';
import comments from '../api/comments';
import users from '../api/users';
import Post from './Post';

function PostList() {
  const preparedPosts = posts.map(post => (
    <Post
      key={post.id}
      comments={comments}
      users={users}
      post={post}
    />
  ));

  return preparedPosts;
}

export default PostList;
