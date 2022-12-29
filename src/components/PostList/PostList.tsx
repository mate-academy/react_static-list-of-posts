import React from 'react';
import { Post } from '../../Types/Post';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

interface Props {
  posts: Post[];
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <section className="PostList">
    {posts.map((post) => (
      <PostInfo key={post.id} post={post} />
    ))}
  </section>
);
