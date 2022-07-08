import React from 'react';
import { PreparedPost } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  preparedPosts: PreparedPost[]
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <>
    {preparedPosts.map(post => (
      <PostInfo post={post} />
    ))}
  </>
);
