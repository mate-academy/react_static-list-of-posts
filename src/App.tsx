import React from 'react';

import posts from './api/posts';
import users from './api/users';
import comments from './api/comments';
import { PostList } from './components/PostList';
import { Post } from './types/Post';

import './App.scss';

const preparedPosts: Post[] = posts.map(post => {
  const user = users.find(person => person.id === post.userId) || null;
  const reviews = comments.filter(comment => comment.postId === post.userId);

  return { user, reviews, ...post };
});

const App: React.FC = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <h1>Static list of posts</h1>
        <PostList posts={preparedPosts} />
      </div>
    </div>
  </div>
);

export default App;
