import React from 'react';

import { PostInfo } from '../PostInfo';

import postsFromServer from '../../api/posts';

export const PostList: React.FC = () => (
  <div className="PostList">
    {postsFromServer
      .map(post => <PostInfo post={post} key={post.id} />)}
  </div>
);
