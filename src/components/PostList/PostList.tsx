import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo
        title={post.title}
        user={post.user}
        body={post.body}
        comments={post.comments}
        key={post.id}
      />
    ))}
  </div>
);
