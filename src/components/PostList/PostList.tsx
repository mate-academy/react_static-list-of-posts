import React from 'react';

import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';
import { PostTypes } from '../../types/PostTypes';

type Props = {
  posts: PostTypes[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="postList">
    {posts.map((post) => (
      <PostInfo postInfo={post} key={post.id} />
    ))}
  </div>
);
