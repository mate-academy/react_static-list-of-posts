import React from 'react';
import { Post } from '../types/Post';
import PostInfo from './PostInfo';

interface Props {
  posts: Post[];
}

const PostList: React.FC<Props> = ({ posts }) => (
  <div className="posts-list">
    {posts.map(post => (
      <article className="post" key={post.id}>
        <PostInfo post={post} />
      </article>
    ))}
  </div>
);

export default PostList;
