import React from 'react';
import posts from '../api/posts';
import comments from '../api/comments';
import users from '../api/users';
import Post from './Post';

function PostList() {
  const preparedPosts = posts.map(post => (
    {
      post,
      user: users.find(user => post.userId === user.id),
      comments: comments.filter(comment => (comment.postId === post.id)),
    }
  ));

  return (preparedPosts.map(preparedPost => (
    <Post
      key={preparedPost.id}
      comments={preparedPost.comments}
      user={preparedPost.user}
      post={preparedPost}
    />
  )));
}

export default PostList;
