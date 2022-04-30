import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import { Post } from '../../types/Post';
import './PostInfo.scss';

type Props = Omit<Post, 'id' | 'userId'>;

export const PostInfo: React.FC<Props> = ({
  title, body, user, comments,
}) => {
  return (
    <>
      <h4 data-cy="post-title" className="post__title">{title}</h4>
      <p data-cy="post-body" className="post__text">{body}</p>
      {user && <UserInfo name={user.name} email={user.email} />}
      <CommentList comments={comments} />
    </>
  );
};
