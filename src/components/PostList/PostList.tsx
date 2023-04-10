import React from 'react';

import { Post } from '../../types/Post';

import { PostInfo } from '../PostInfo';

type Props = {
  postInfos: Post[];
};

export const PostList: React.FC<Props> = ({ postInfos }) => (
  <div className="PostList">
    {postInfos.map(postInfo => (
      <PostInfo key={postInfo.id} post={postInfo} />
    ))}
  </div>
);
