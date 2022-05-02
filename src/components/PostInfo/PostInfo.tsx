import React from 'react';

import './PostInfo.scss';

import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = Omit<Post, 'id' | 'userId'>;

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => {
  return (
    <>
      <h2 data-cy="post-title" className="post__title">{title}</h2>
      <p data-cy="post-body" className="post__text">{body}</p>
      {user && <UserInfo name={user.name} email={user.email} />}
      <CommentList comments={comments} />
    </>
  );
};
