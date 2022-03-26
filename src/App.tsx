import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './types/Post';
import { FullPost } from './types/FullPost';
import { Comment } from './types/Comment';
import { User } from './types/User';

import { PostList } from './components/PostList/PostList';

function preparePosts(
  posts: Post[],
  users: User[],
  comments: Comment[],
): FullPost[] {
  return posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId) || null,
    comments: comments.filter(comment => comment.postId === post.id),
  }));
}

const preparedPosts = preparePosts(postsFromServer, usersFromServer, commentsFromServer);

export const App: React.FC = () => {
  return (
    <div className="app">
      <h1 className="app__title">
        Posts with comments
      </h1>
      <PostList preparedPosts={preparedPosts} />
    </div>
  );
};
