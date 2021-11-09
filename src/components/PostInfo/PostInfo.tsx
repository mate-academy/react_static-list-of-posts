import React from 'react';
import { PreparedPost } from '../../types/types';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { UserInfo } from '../UserInfo/UserInfo';

export interface Prop {
  post: PreparedPost;
}

export const PostInfo: React.FC<Prop> = ({ post }) => (
  <>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    {post.user && <UserInfo user={post.user} />}
    {post.comments.length ? (
      <ul>
        {post.comments.map(comment => <CommentInfo key={comment.id} comment={comment} />)}
      </ul>
    ) : (
      <li>
        No comments yet
      </li>
    )}
  </>
);
