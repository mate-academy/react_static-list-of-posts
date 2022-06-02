import React from 'react';
import { PreparedPost } from '../../react-app-env';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type Props = {
  preparedPosts: PreparedPost[];
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul>
    {preparedPosts.map(post => (
      <li key={post.id} className="post">

        <div>
          <PostInfo post={post} />
        </div>

      </li>
    ))}

  </ul>

);
