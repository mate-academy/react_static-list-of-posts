import React from 'react';
import { PostAllInfo } from '../../types/PostAllInfo';
import { PostInfo } from '../PostInfo';

type Prop = {
  postInfo: PostAllInfo[]
};

export const PostList: React.FC<Prop> = ({ postInfo }) => (
  <div className="PostList">
    {
      postInfo.map((post: PostAllInfo) => (
        <PostInfo post={post} key={post.id} />
      ))
    }
  </div>
);
