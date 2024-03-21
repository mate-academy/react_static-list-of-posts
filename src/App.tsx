import React from 'react';
import './App.scss';

import { PostList } from './components/PostList';

import { Post } from './types/Post';
import { CombinedType } from './types/CombinedType';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

type Props = {
  posts: Post;
};

const posts = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(user => user.id === post.userId),
  comments: commentsFromServer.filter(comment => comment.postId === post.id),
}));

export const App: React.FC<Props> = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts as CombinedType[]} />
  </section>
);
