import React from 'react';
import { PreparedPost } from '../../react-app-env';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  preparedPosts: PreparedPost[],
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul className="post-list">
    {preparedPosts.map(post => (
      <li key={post.id} className="post-list__item">

        <div>
          <PostInfo post={post} />
        </div>

      </li>
    ))}
  </ul>
);
