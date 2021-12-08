import React from 'react';

import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  preparedPosts: Post[];
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul className="post__list">
    {preparedPosts.map((post) => (
      <li className="post__item" key={post.id}>
        <h2 className="post__title">{post.title}</h2>
        <div className="post__body">{post.body}</div>
        <PostInfo
          user={post.user}
          comments={post.comments}
        />
      </li>
    ))}
  </ul>
);
