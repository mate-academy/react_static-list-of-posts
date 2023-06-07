import React from 'react';
import './PostList.scss';

import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts = [] }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo
        key={post.id}
        title={post.title}
        body={post.body}
        comments={post.comments}
        user={post.user}
        id={post.userId}
      />
    ))}
  </div>
);
