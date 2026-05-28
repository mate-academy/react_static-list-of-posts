import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../../types/Post';

type Props = {
  list: Post[];
};

export const PostList: React.FC<Props> = ({ list }) => (
  <div className="PostList">
    {list.map(item => (
      <PostInfo key={item.id} post={item} />
    ))}
  </div>
);
