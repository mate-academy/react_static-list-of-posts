import React from 'react';
import './PostInfo.scss';
import { PostType } from '../../types/PostType';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: PostType;
};

export const PostInfo: React.FC <Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <li className="PostInfo">
      <h2>{title}</h2>
      <p>{body}</p>

      { user
        ? <UserInfo user={user} />
        : null}

      <CommentList comments={comments} />
    </li>
  );
};
