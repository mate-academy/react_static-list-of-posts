import React from 'react';
import { PostInfo } from '../PostInfo';

import { Post } from '../../types/Post';

import './PostList.scss';

type Props = {
  posts: Post[] | null;
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts && posts.length > 0
      ? (posts.map(post => (
        <PostInfo
          key={post.id}
          post={{
            title: post.title,
            body: post.body,
            user: post.user,
            comments: post.comments,
          }}
        />
      )))
      : (
        <p>No posts available</p>
      )}
  </div>
);
