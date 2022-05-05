import React from 'react';
import { Post } from '../../types/Post';
import PostInfo from '../PostInfo';

import './PostList.scss';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="post-list" data-cy="post-info">
    {posts.map(post => (
      <li className="post" key={post.id}>
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
