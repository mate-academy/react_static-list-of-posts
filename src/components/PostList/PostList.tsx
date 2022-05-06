import React from 'react';
import { Post } from '../../interfaces/Post';
import { PostInfo } from '../PostInfo';

import './PostList.scss';

type Props = {
  posts: Array<Post>
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="postList">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
