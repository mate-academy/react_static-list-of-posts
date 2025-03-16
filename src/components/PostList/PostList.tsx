import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/Post';

type FullListProp = {
  fullList: Post[];
};

export const PostList: React.FC<FullListProp> = ({ fullList }) => {
  return (
    <div className="PostList">
      {fullList.map(postItem => (
        <PostInfo key={postItem.id} postItems={postItem} />
      ))}
    </div>
  );
};
