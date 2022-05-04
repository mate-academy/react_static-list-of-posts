import React from 'react';
import { Post } from '../../Types/Post';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ol data-cy="post-info" className="postList">
    {posts.map(post => (
      <li key={post.id} className="postList__item">
        <PostInfo post={post} />
      </li>
    ))}
  </ol>
);
