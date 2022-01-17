import React from 'react';
import './PostList.scss';

import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: PreparedPost[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="">
    {posts.map(post => (
      <div className="box" key={post.id}>
        <PostInfo {...post} />
      </div>
    ))}
  </div>
);
