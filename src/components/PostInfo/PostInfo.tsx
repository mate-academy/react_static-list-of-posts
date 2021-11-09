import React from 'react';
import { PreparedPosts } from '../../types/types';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentInfo } from '../CommentInfo/CommentInfo';

interface Props {
  post: PreparedPosts,
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <li className="post__item">
    <h2 className="post__title">{post.title}</h2>
    <p className="post__body">{post.body}</p>
    {post.user ? <UserInfo user={post.user} /> : null }
    <h2 className="comments__title">Comments</h2>
    {(post.comments.length > 0)
      ? post.comments.map((comment) => <CommentInfo comment={comment} key={comment.id} />)
      : 'Some comment..'}
  </li>
);
