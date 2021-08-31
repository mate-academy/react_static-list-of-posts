import React from 'react';
import { Post, PostInfo } from '../PostInfo/PostInfo';

type Props = {
  post: Post[],
};

export const PostList: React.FC<Props> = ({ post }) => {
  return (
    <div>
      {post.map(item => <PostInfo props={item} />)}
    </div>
  );
};
