import React from 'react';
import { PostInfo } from '../PostInfo';

import { Post } from '../../types/Post';

type Props = {
  list: Post[]
};

export const PostList: React.FC<Props> = ({ list }) => (
  <div className="PostInfo">
    {list.map(post => (
      <PostInfo
        title={post.title}
        user={post.user}
        body={post.body}
        comments={post.comments}
        key={post.id}
      />
    ))}
  </div>
);
