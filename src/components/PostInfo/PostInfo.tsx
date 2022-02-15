import React from 'react';
import { CommentsList } from '../CommentsList';
import { UserInfo } from '../UserInfo/UserInfo';
import { Post } from '../../types/Post';
import './PostInfo.scss';

type Props = {
  post:Post,
};

export const PostInfo:React.FC<Props> = ({ post }) => (
  <div className="posts__info info">
    <p className="info__title">{post.title}</p>
    <p className="info__body">{post.body}</p>
    {post.user && (
      <UserInfo
        email={post.user.email}
        name={post.user.name}
      />
    )}

    <CommentsList comms={post.comment} />
  </div>
);
