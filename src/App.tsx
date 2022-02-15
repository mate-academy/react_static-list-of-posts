import React from 'react';

import './App.scss';

import { PostList} from "./PostList";
import { Post } from "./types/Post";
import { User } from "./types/User";
import { Comment } from "./types/Comment";

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function preparedPosts(posts: Post[], users: User[], comments: Comment[]) {
  return posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comment: comments.filter(comment => comment.postId === post.id),
  }));
}

const preparePosts = preparedPosts(
  postsFromServer,
  usersFromServer,
  commentsFromServer,
);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList preparePosts={preparePosts} />
  </div>
);

export default App;
