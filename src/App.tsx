import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/User';
import { Post } from './types/Post';
import { Comment } from './types/Comment';
import { PostData } from './types/PostData';

export const getPostData = function getPostData(id: number): PostData {
  const post = postsFromServer.find((v) => v.id === id) as Post;

  const user = usersFromServer.find((v) => v.id === post.userId) as User;
  const postComments: Comment[] = commentsFromServer.filter((comment) => {
    return comment.postId === id;
  });

  return {
    ...post,
    comments: postComments,
    user,
  };
};

function getAllPosts(): PostData[] {
  return postsFromServer.map((post) => getPostData(post.id));
}

const postList: PostData[] = getAllPosts();

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={postList} />
  </section>
);
