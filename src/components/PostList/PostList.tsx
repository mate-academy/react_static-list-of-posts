import React from 'react';
import { PostInfo } from '../PostInfo';

import { Post } from '../../types/Post';

import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.length > 0
      ? (posts.map((
        {
          id,
          title,
          body,
          user,
          comments,
        },
      ) => (
        <PostInfo
          key={id}
          post={{
            title,
            body,
            user,
            comments,
          }}
        />
      )))
      : (
        <p>No posts available</p>
      )}
  </div>
);
