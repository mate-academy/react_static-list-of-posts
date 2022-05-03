import React from 'react';

import { Post } from '../../types/post';
import './PostList.scss';

import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: Post[]
};

export const PostList: React.FC<Props> = ({ posts = [] }) => {
  return (
    <ul className="post__list" data-cy="post-info">
      {posts.map(post => (
        <li className="post__item" key={post.id}>
          <PostInfo
            title={post.title}
            body={post.body}
            user={post.user}
            comments={post.comments}
          />
        </li>
      ))}
    </ul>
  );
};
