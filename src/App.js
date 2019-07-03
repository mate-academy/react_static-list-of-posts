import React from 'react';
import PostList from './components/PostList/PostList';
import posts from './api/posts';
import users from './api/users';

const style = {
  textAlign: 'center',
  margin: 'auto',
  width: '500px',
};

const PostsWithUser = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
}));

const App = () => (
  <div className="App" style={style}>
    <h1>Static list of posts</h1>
    <PostList posts={PostsWithUser} />
  </div>
);

export default App;
