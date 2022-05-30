import React from 'react';
import './App.scss';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import {
  Post, Comment, User, PreparedData,
} from './react-app-env';
import { PostList } from './components/PostList';

const prepare = (
  posts: Post[],
  comments: Comment[],
  users: User[],
): PreparedData[] => (
  posts.map((post: Post) => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(coment => coment.postId === post.id),
  }))
);

const preparedPosts = prepare(
  postsFromServer,
  commentsFromServer,
  usersFromServer,
);

const App: React.FC = () => (
  <div className="App notification is-primary">
    <p>
      <strong className="title is-3">
        Static list of posts
      </strong>
    </p>
    <PostList preparedposts={preparedPosts} />
  </div>
);

export default App;
