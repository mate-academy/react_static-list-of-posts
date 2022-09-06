import React from 'react';
import { Posts } from '../../types/Posts';
import { PostInfo } from '../PostInfo';

type Props = {
  postList: Posts[]
};

export const PostList: React.FC<Props> = ({ postList }) => {
  return (
    <div className="PostList">
      {postList.map((post) => (
        <PostInfo post={post} key={post.id} />
      ))}
    </div>
  );
};
