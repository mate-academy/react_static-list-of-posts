import React from 'react';
import { PostInfo } from '../PostInfo';
import { PostsForProps } from '../../types/posts';

export const PostList: React.FC<PostsForProps> = ({ postsItems }) => (
  <div className="PostList">
    {postsItems.map(postItem => (
      <div
        className="PostInfo"
        key={postItem.id}
      >
        <PostInfo {...postItem} />
      </div>
    ))}
  </div>
);
