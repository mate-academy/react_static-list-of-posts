import React from 'react';
import { PostInfo } from '../PostInfo';

import { Post } from '../../react-app-env';

import postsFromServer from '../../api/posts';
import commentsFromServer from '../../api/comments';
import usersFromServer from '../../api/users';

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(user => user.id === post.userId) || null,
  comments: commentsFromServer.filter(comment => comment.postId === post.id),
}));

export const PostList: React.FC = () => (
  <div className="PostList">

    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
