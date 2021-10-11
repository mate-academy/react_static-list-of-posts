import React from 'react';
import { PreparedPost } from '../../types/PreparedPost';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './Post.scss';

type Props = {
  post: PreparedPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="posts__post post">
    <p className="post__title">{post.title}</p>
    <p className="post__body">{post.body}</p>
    {post.user && (<UserInfo user={post.user} />)}
    <CommentList comments={post.comments} />
  </div>
);
