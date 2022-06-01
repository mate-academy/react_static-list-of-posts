import React from 'react';
import { PreparedPosts } from '../../app.typedefs';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  preparedPosts: PreparedPosts[];
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul>
    {
      preparedPosts.map(preparedPost => {
        return (
          <li key={preparedPost.id}>
            <PostInfo preparedPost={preparedPost} />
          </li>
        );
      })
    }
  </ul>
);
