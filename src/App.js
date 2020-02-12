import React from 'react';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './PostList';

const App = () => {
  const preparedPosts = posts
    .map((post) => {
      const user = users.find(it => it.id === post.userId);
      const commentsList = comments
        .filter(comment => comment.postId === post.id);

      return {
        ...post,
        user,
        comments: commentsList,
      };
    });

  return (
    <div className="App">
      <h1>Static list of posts</h1>

      <p>
        <span>posts: </span>
        {posts.length}
      </p>

      <p>
        <span>comments: </span>
        {comments.length}
      </p>

      <p>
        <span>Users: </span>
        {users.length}
      </p>

      <PostList posts={preparedPosts} />
    </div>
  );
};

export default App;
