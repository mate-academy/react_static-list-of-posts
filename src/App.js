import React from 'react';

import posts from './api/posts';
import users from './api/users';
import comments from './api/comments';
import PostList from './components/PostList';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => post.id === comment.postId),
}
));

function App() {
  return (
    <div className="App">
      <h1>Static list of posts</h1>
      <PostList
        items={preparedPosts}
      />
    </div>
  );
}

export default App;
