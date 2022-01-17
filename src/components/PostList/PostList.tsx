import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { PostInfo } from '../PostInfo/PostInfo';

interface Props {
  posts: Post[],
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="content container is-fluid">
    {posts.map(post => (
      <li key={post.id} className="card card-content">
        <PostInfo post={post} />
        <CommentList comments={post.comments} />
      </li>
    ))}
  </ul>
);
