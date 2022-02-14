import React from 'react';
import usersFromServer from './api/users';
import postsFromServer from './api/posts';
import commentsFormServer from './api/comments';

import './App.scss';
import { Comment } from './types/Comment';
import { Post } from './types/Post';
import { User } from './types/User';
import { FullPost } from './types/FullPost';
import { PostList } from './components/PostList/PostList';

function prepared(
  posts: Post[],
  users: User[],
  comments: Comment[],
): FullPost[] {
  return posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }));
}

const preparedPosts = prepared(postsFromServer, usersFromServer, commentsFormServer);

const App: React.FC = () => (
  <div className="App">
    <PostList postList={preparedPosts} />
  </div>
);

export default App;
