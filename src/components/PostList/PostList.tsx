import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(({
      title,
      user,
      body,
      comments,
      id,
    }) => (
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
