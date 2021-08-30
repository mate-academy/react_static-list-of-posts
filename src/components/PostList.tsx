import React from 'react';
import { Post } from '../Types/Post';
import { PostInfo } from './PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <div className="container">
      {posts.map(post => (
        <div className="card border-info mb-3" key={post.id}>
          <PostInfo post={post} />
        </div>
      ))}
    </div>
  );
};
