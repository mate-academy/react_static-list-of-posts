import React from 'react';
import { PostInfo } from '../PostInfo';

import { Post } from '../../types/Post';

type Props = {
  list: Post[]
};

export const PostList: React.FC<Props> = ({ list }) => (
  <div className="PostInfo">
    {list.map(post => (
      <PostInfo {...post} key={post.id} />
    ))}
  </div>
);
