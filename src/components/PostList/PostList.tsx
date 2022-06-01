import React from 'react';
import { PreparedPosts } from '../../app.typedefs';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type Props = {
  preparedPosts: PreparedPosts[];
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul>
    {
      preparedPosts.map(preparedPost => {
        return (
          <li
            key={preparedPost.id}
            className="post-list__item"
          >
            <PostInfo preparedPost={preparedPost} />
          </li>
        );
      })
    }
  </ul>
);
