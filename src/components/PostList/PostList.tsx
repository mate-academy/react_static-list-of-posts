import React from 'react';
import { PostType } from '../../types/PostType';
import { PostInfo } from '../PostInfo';

type Props = {
  post: PostType[],
};

export const PostList: React.FC<Props> = ({ post }) => (
  <div className="PostList">
    {
      post.map(item => (
        <PostInfo key={item.id} post={item} />
      ))
    }
  </div>
);
