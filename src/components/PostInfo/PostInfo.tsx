import React from 'react';
import './PostInfo.scss';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: Post;
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
        : null }

      { comments
        ? <CommentList comments={comments} />
        : null }
    </li>
  );
};
