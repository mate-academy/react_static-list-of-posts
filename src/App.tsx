import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { Post } from './types/Post';

export const App: React.FC = () => {
  const getUser = (userId: number) => {
    const foundUser = usersFromServer.find(user => userId === user.id);

    return foundUser || null;
  };

  const postsList: Post[] = postsFromServer.map(post => {
    return {
      ...post,
      user: getUser(post.userId),
      comments: commentsFromServer.filter(
        comment => comment.postId === post.id,
      ),
    };
  });

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList fullList={postsList} />
    </section>
  );
};
