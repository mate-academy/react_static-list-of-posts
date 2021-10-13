import React from 'react';
import { Post } from '../../api/Types/Interfaces';
import { CommentsList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export interface Props {
  post: Post;
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="postList__post">
    <h2 className="postList__title">{post.title}</h2>
    <div className="post__body">{post.body}</div>
    {post.user && <UserInfo user={post.user} />}
    <CommentsList comments={post.comments} />
  </div>
);
