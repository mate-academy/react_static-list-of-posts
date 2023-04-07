import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  postList: Post[];
};

export const PostList: React.FC<Props> = ({ postList }) => (
  <div className="PostList">
    {postList.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
