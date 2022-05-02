import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentsList } from '../CommentsList/CommentsList';
import './PostInfo.scss';

type Props = Omit<Post, 'id' | 'userId'>;

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comment,
}) => (
  <>
    <div className="Post">
      <h2 className="Post__title" data-cy="post-title">{title}</h2>
      <p className="Post__body" data-cy="post-body">{body}</p>
    </div>
    {user && <UserInfo name={user.name} email={user.email} />}
    <CommentsList comment={comment} />
  </>
);
