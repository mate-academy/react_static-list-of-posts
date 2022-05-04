import React from 'react';
import { Post } from '../../types/Types';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type Props = {
  prepPosts: Post[],
};

export const PostList: React.FC<Props> = ({ prepPosts }) => (
  <ul data-cy="post-info" className="post__list">
    {
      prepPosts.map((post) => (
        <li className="post__item" key={post.id}>
          <PostInfo
            post={post}
          />
        </li>
      ))
    }
  </ul>
);
