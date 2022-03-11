import React from 'react';
import { IPostRequired } from '../../types/IPost';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

type PostInfoProps = {
  post: IPostRequired,
};

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => (
  <div className="PostInfo">
    <UserInfo addClassName="PostInfo__userInfo" user={post.user} />

    <h2 className="PostInfo__title">{post.title}</h2>
    <p className="PostInfo__body">{post.body}</p>

    <CommentList comments={post.comments} />
  </div>
);
