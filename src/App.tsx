import React from 'react';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';
import {
  PreparedPost,
  Post,
  User,
  Comment,
} from './react-app-env';
import 'bulma/css/bulma.min.css';

const preparedPostsFn = (
  postsArg: Post[],
  commentsArg: Comment[],
  usersArg: User[],
): PreparedPost[] => {
  return postsArg.map(post => ({
    ...post,
    comments: commentsArg.filter(comment => comment.postId === post.id),
    user: usersArg.find(user => user.id === post.userId) || null,
  }));
};

const preparedPosts = preparedPostsFn(posts, comments, users);

const App: React.FC = () => (
  <div className="App">
    <h1 className="has-text-centered title">
      Static list of posts
    </h1>
    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
