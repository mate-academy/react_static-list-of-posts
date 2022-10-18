import React from 'react';

import { PostInfo } from '../PostInfo';

import { Post } from '../../types/Post';

type Props = {
  postsArr: Post[],
};

export const PostList: React.FC<Props> = ({ postsArr }) => (
  <div className="PostList">
    {postsArr.map(onePost => (
      <div key={onePost.id}>
        <PostInfo {...onePost} />
      </div>
    ))}
  </div>
);
