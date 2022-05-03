import React from 'react';
import { PreparedPost } from '../../types/PreparedPost';
import { PostInfo } from '../PostInfo/PostInfo';

import './PostList.scss';

type Props = {
  posts: PreparedPost[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="posts">
    <ul className="posts__list" data-cy="post-info">
      {posts.map(post => (
        <li key={post.id} className="posts__item">
          <PostInfo
            title={post.title}
            body={post.body}
            user={post.user}
            comments={post.comments}
          />
        </li>
      ))}
    </ul>
  </div>
);
