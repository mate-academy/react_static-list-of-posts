import React from 'react';
import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { PostsType } from './../../types/PostsType';

type Props = {
  post: PostsType;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
      </div>
      <UserInfo user={post.user} />
      <p className="PostInfo__body">{post.body}</p>
      {post.comments !== null && <CommentList comments={post.comments} />}
    </div>
  );
};
