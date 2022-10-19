import React from 'react';
import { PostAllInfo } from '../../types/PreparedPost';
import { PostInfo } from '../PostInfo';

import './PostList.scss';

type Prop = {
  postInfo: PostAllInfo[]
};

export const PostList: React.FC<Prop> = ({ postInfo }) => (
  <ul className="PostList">
    {
      postInfo.map((post: PostAllInfo) => (
        <PostInfo post={post} key={post.id} />
      ))
    }
  </ul>
);
