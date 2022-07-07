import React from 'react';
import './PostList.scss';
import { Post } from '../../types/post';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  preparedPosts: Post[],
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul className="preparedPosts_list">
    {preparedPosts.map(post => (
      <>
        <li className="post" key={post.id}>
          <PostInfo post={post} />
        </li>
      </>
    ))}
  </ul>
);
