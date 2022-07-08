import React from 'react';

import 'bulma/css/bulma.min.css';
import { Heading } from 'react-bulma-components';

import { PostList } from './components/PostList/PostList';
import { Post } from './components/PostInfo/PostInfo';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts: Post [] = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),

}));

const App: React.FC = () => (
  <div className="App">
    <Heading textAlign="center" textTransform="uppercase">
      <h1>Static list of posts</h1>
    </Heading>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
