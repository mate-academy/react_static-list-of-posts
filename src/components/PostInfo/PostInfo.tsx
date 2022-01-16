import React from 'react';
import { PrepearedPost } from '../../types/PrepearedPost';
import { UserInfo } from '../UserInfo';
import { CommentInfo } from '../CommentInfo';

type Props = {
  posts: PrepearedPost[]
};

export const PostInfo:React.FC<Props> = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        {post.user && <UserInfo user={post.user} />}
        {post.comments && <CommentInfo comments={post.comments} />}
      </li>
    ))}
  </ul>
);
