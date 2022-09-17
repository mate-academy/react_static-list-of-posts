import React from 'react';

import './PostList.scss';

import { Posts } from '../../type/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Posts[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <React.Fragment key={post.id}>
        <PostInfo post={post} />
      </React.Fragment>
    ))}
  </div>
);
