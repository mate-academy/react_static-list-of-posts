import React from 'react';
import { PostInfo } from '../PostInfo';

import { User, Comment, Post } from '../../react-app-env';

import postsFromServer from '../../api/posts';
import commentsFromServer from '../../api/comments';
import usersFromServer from '../../api/users';

function getUser(userId: number): User | null {
  const userToFind = usersFromServer.find(user => user.id === userId);

  return userToFind || null;
}

function getComments(postId: number): Comment[] {
  const comments = commentsFromServer
    .filter(comment => postId === comment.postId);

  return comments;
}

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const PostList: React.FC = () => (
  <div className="PostList">

    {
      posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))
    }
  </div>
);
