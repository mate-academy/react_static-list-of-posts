import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  post: Array<Post>
};

export const PostList: React.FC<Props> = ({ post }) => (
  <div className="PostList">
    {post.map(item => (
      <PostInfo post={item} key={item.id} />
    ))}
  </div>
);
