import React from 'react';
import { PostRequired } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

type PostInfoProps = {
  post: PostRequired,
};

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => (
  <div className="postInfo">
    <UserInfo addClassName="postInfo__userInfo" user={post.user} />

    <h2 className="postInfo__title">{post.title}</h2>
    <p className="postInfo__body">{post.body}</p>

    <CommentList comments={post.comments} />
  </div>
);
