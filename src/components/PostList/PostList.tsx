import React from 'react';

import { PostInfo } from '../PostInfo';

import { TotalInfo } from '../../types/TotalInfo';

type Props = {
  arrayOfInfo: TotalInfo[]
};

export const PostList: React.FC<Props> = ({ arrayOfInfo }) => (
  <div className="PostList">
    {arrayOfInfo.map(information => <PostInfo totalData={information} />)}
  </div>
);
