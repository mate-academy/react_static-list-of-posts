import React from 'react';
import { PreparedPost } from '../../react-app-env';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  preparedPost: PreparedPost[],
};

export const PostList: React.FC<Props> = ({ preparedPost }) => (
  <>
    <ul>
      {preparedPost.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </ul>
  </>
);
