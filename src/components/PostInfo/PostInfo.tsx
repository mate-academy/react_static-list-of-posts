import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

type PostProps = {
  post: Post,
};

export const PostInfo: React.FC<PostProps> = ({ post }) => (
  <>
    <UserInfo user={post.user} />
    <p className="post__title">{post.title}</p>
    <p className="post__body">{post.body}</p>
    <p className="post__comments-title">Comments</p>
    <CommentList comments={post.comments} />
  </>

);
