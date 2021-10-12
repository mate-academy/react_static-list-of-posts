import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="postInfo">
    <h2 className="postInfo__title">{post.title}</h2>
    <p>{post.body}</p>
    {post.user && (
      <UserInfo user={post.user} />
    )}
    {post.comments && (
      <CommentList comments={post.comments} />
    )}
  </div>
);
