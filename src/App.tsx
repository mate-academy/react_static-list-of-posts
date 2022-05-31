import React from 'react';
import './App.scss';

import {
  User,
  Comment,
  Post,
  FullPosts,
} from './react-app-env';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const preparedPostsFunction = (
  allPosts: Post[],
  allUsers: User[],
  allComments: Comment[],
) => {
  return allPosts.map(post => ({
    ...post,
    user: allUsers.find(user => user.id === post.userId),
    comments: allComments.filter(coment => coment.postId === post.id),
  }));
};

const preparedPosts:FullPosts[] = preparedPostsFunction(posts, users, comments);

// eslint-disable-next-line no-console
console.log(preparedPosts);

const App: React.FC = () => (
  <div className="App">
    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
