import React from 'react';
import { InfoBlock } from '../../type/types';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

interface Props {
  infoBlocks: InfoBlock[];
}

export const PostList: React.FC<Props> = ({ infoBlocks }) => (
  <ul className="PostList">
    {infoBlocks.map((infoBlock) => (
      <li key={infoBlock.id}>
        <PostInfo post={infoBlock} />
      </li>
    ))}
  </ul>
);
