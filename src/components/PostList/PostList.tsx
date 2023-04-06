import React from 'react';
import { PostInfo } from '../PostInfo';

import { Post } from '../../types/Post';

type Props = {
  list: Post[],
};

export const PostList: React.FC<Props> = ({ list }) => (
  <div className="PostList">
    {list.map((post) => <PostInfo key={post.id} post={post} />)}
  </div>
);
