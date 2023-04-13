import React from 'react';
import { PreparedPost } from '../../types/PreparedPost';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  preparedPosts: PreparedPost[]
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <div className="PostList">
    {preparedPosts.map((post) => {
      return (
        <PostInfo post={post} key={post.id} />
      );
    })}
  </div>
);
