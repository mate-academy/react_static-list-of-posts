import React from 'react';
import './PostList.scss';
import { PreparedPost } from '../../appTypeDefs';
import { PostInfo } from '../PostInfo/PostInfo';

interface PostListProps {
  posts: PreparedPost[];
}

export const PostList: React.FC<PostListProps> = ({ posts }) => (
  <>
    {
      posts.map(post => (
        <article className="Article" key={post.id}>
          <PostInfo post={post} />
        </article>
      ))
    }
  </>
);
