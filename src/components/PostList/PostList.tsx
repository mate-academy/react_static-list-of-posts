import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  postList: Post[];
};

export const PostList: React.FC<Props> = ({ postList }) => {
  return (
    <div className="PostList">
      {postList.map((post) => (
        <PostInfo posts={post} key={post.id} />
      ))}
    </div>
  );
};
