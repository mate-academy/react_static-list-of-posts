import React from 'react';

import { PostInfo } from '../PostInfo';
import { PostInfoType } from '../../types/PostInfo';

type Props = {
  postsList: PostInfoType[];
};

export const PostList: React.FC<Props> = ({ postsList }) => {
  return (
    <div className="PostList">
      {postsList.map(postInfoItem => (
        <div className="PostInfo" key={postInfoItem.id}>
          <PostInfo post={postInfoItem} />
        </div>
      ))}
    </div>
  );
};
