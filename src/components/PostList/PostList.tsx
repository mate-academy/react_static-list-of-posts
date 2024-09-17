import React from 'react';

import { PostInfo } from '../PostInfo';
import { Post } from '../../types/Posts';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(({ id, title, user, body, comments }) => (
      <PostInfo
        title={title}
        user={user}
        body={body}
        comments={comments}
        key={id}
      />
    ))}
  </div>
);
