import React from 'react';
import { Post } from '../../types/types';
import { PostInfo } from '../PostInfo/PostInfo';

import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="PostList__wrapper">
      {posts.map((post) => (
        <div className="PostList__item">
          <PostInfo key={post.id} post={post} />
        </div>
      ))}
    </div>
  );
};
