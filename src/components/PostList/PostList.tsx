import React from 'react';
import { Post } from '../Types/Types';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[]
};

export const PostList:React.FC<Props> = ({ posts }) => (
  <ol>
    {posts.map(post => (
      <li key={post.id} className="post">
        {post.user && (
          <PostInfo post={post} />
        )}
      </li>
    ))}
  </ol>
);
