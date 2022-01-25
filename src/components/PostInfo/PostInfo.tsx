import React from 'react';
import { PreparedPost } from '../../types/PreparedPost';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

import './PostInfo.scss';

type Props = {
  post: PreparedPost;
};

export const PostInfo: React.FC<Props> = ({
  post: {
    title, body, user, comments,
  },
}) => (
  <div className="Post">
    <h2 className="Post__title">{title}</h2>
    <p className="Post__text">{body}</p>
    {user ? <UserInfo user={user} /> : 'User not found'}
    {comments ? <CommentList comments={comments} /> : 'No Comments'}
  </div>
);
