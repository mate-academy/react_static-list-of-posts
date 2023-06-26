import React from 'react';

import { PostInfoData } from '../../types/PostInfoData';

import { PostInfo } from '../PostInfo';

type Props = {
  data: PostInfoData[];
};

export const PostList: React.FC<Props> = ({ data }) => (
  <ul>
    {data.map((post) => {
      return <PostInfo key={post.id} post={post} />;
    })}
  </ul>
);
