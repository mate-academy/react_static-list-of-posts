import React from 'react';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const App = () => (
  <>
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
    </div>
    <PostList postList={preparedPosts} />
  </>
);

export const preparedPosts = posts.map((post) => {
  const commentsList = comments.filter(comment => comment.postId === post.id);

  return {
    ...post,
    user: users.find(user => user.id === post.userId),
    commentsList,
  };
});

export default App;
