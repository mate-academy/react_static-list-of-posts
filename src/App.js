import React from 'react';
import PostList from './components/PostList/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

function getPostsWithComments(postsList, usersList, commentsList) {
  return postsList.map(post => ({
    ...post,
    user: usersList.find(user => user.id === post.userId),
    comments: commentsList.filter(comment => comment.postId === post.id),
  }));
}

const preparedPosts = getPostsWithComments(posts, users, comments);

const App = () => (
  <>
    <PostList posts={preparedPosts} />
  </>
);

export default App;
