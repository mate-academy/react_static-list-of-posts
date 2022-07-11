import React from 'react';
import { PreparedPost } from '../../types/types';
import { PostInfo } from '../PostInfo';

type Props = {
  preparedPosts: PreparedPost[];
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul>
    {preparedPosts.map(post => (
      <div className="PostList">
        <PostInfo post={post} />
      </div>
    ))}
  </ul>
);

export default PostList;
