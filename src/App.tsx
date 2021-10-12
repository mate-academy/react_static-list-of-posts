import React from 'react';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import './App.scss';
import { Post } from './Components/Types/PostTypes';
import { PostList } from './Components/PostList';

const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find(u => u.id === post.userId) || null,
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <table>
      <thead>
        <tr>
          <td>Title</td>
          <td>Body of Post</td>
          <td>Name</td>
          <td>email</td>
          <td>Comments</td>
        </tr>
      </thead>
      <tbody>
        <PostList postList={preparedPosts} />
      </tbody>
    </table>
  </div>
);

export default App;
