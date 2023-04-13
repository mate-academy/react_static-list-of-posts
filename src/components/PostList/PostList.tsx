import React from 'react';
import { FullPost } from '../../types/FullPost';
import { PostInfo } from '../PostInfo';

type Props = {
  fullPost: FullPost[];
};

export const PostList: React.FC<Props> = ({ fullPost }) => (
  <div className="PostList">

    {fullPost.map(post => (
      <PostInfo post={post} />
    ))}

  </div>
);
