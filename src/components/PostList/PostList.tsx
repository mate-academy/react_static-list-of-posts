import React from 'react';
import { PostWithComments } from '../../types/PostWithComments';
import { PostInfo } from '../PostInfo';

type Props = {
  postList: PostWithComments[];
};

export const PostList: React.FC<Props> = ({ postList }) => (
  <div className="PostList">
    {postList.map((post: PostWithComments) => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
