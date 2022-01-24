import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="post">
    <h2 className="post__title">{post.title}</h2>
    <p className="post__body">{post.body}</p>
    <span className="post__user-info">{post.user && (<UserInfo user={post.user} />)}</span>
    <h3>Comments:</h3>
    <CommentList comments={post.comments} />
  </div>
);
