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
        <PostInfo
          user={post.user}
          title={post.title}
          body={post.body}
          comments={post.comments}
        />
      </li>
    ))}
  </ul>
);
