import React from 'react';

import './App.scss';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './types/User';
import { Post } from './types/Post';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList';

function getUser(userId: number): User {
  const getUserById: any = usersFromServer.find(user => user.id === userId);

  return getUserById;
}

export const posts: Post[] = postsFromServer.map((post) => {
  const postComments: Comment[] = commentsFromServer.filter((comment) => {
    return comment.postId === post.id;
  });

  return {
    ...post,
    user: getUser(post.userId),
    comments: postComments,
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
