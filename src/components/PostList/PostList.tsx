import React from 'react';
import { PreparedPost } from '../../types';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  data: PreparedPost[];
};
export const PostList: React.FC<Props> = ({ data }) => (
  <ul className="post-list">
    {data.map(preparedPost => {
      return (
        <PostInfo key={preparedPost.id} data={preparedPost} />
      );
    })}
  </ul>
);
