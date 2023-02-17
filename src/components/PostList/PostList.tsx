import React from 'react';
import { PostWithAllDate } from '../../types/postWithAllDate';
import { PostInfo } from '../PostInfo';

type Props = {
  arrObjects: PostWithAllDate[]
};

export const PostList: React.FC<Props> = ({ arrObjects }) => (
  <div className="PostList">
    {
      arrObjects && arrObjects.map((object: PostWithAllDate) => (
        <PostInfo object={object} key={object.id} />
      ))
    }
  </div>
);
