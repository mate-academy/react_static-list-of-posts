import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList/PostList';
import { User } from './types/User';
import { Comments } from './types/Comment';
import { PreparedPost, Post } from './types/Post';

function preparePosts(
  posts: Post[], users: User[], comments: Comments[],
): PreparedPost[] {
  return posts.map(post => {
    const user = users.find(u => u.id === post.userId);
    const postComments = comments.filter(comment => comment.postId === post.id);

    return { ...post, user, comments: postComments };
  });
}

export const App: React.FC = () => {
  const preparedPosts = preparePosts(
    postsFromServer, usersFromServer, commentsFromServer,
  );

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={preparedPosts} />
    </section>
  );
};
