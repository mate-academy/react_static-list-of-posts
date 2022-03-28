import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { PreparedPost } from './types/PreparedPost';
import { PostList } from './component/PostList';

function preparePosts(
  posts: Post[],
  comments: Comment[],
  users: User[],
): PreparedPost[] {
  return posts.map((post) => ({
    ...post,
    user: users.find(user => user.id === post.userId) || null,
    comments: comments.filter(comment => comment.postId === post.id),
  }));
}

const preparedPosts = preparePosts(postsFromServer, commentsFromServer, usersFromServer);

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
