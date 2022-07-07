import React from 'react';
import './PostList.scss';

import posts from '../../api/posts';
import comments from '../../api/comments';
import users from '../../api/users';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

export const PostList: React.FC = () => (
  <>
    {preparedPosts.map(post => (
      <PostInfo post={post} />
    ))}
  </>
);
