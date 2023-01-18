import React from 'react';

import { PostInfo } from '../PostInfo';

import { TotalInfo } from '../../types/TotalInfo';

type Props = {
  postInfo: TotalInfo[]
};

export const PostList: React.FC<Props> = ({ postInfo }) => (
  <div className="PostList">
    {postInfo.map(information => <PostInfo totalData={information} />)}
  </div>
);
