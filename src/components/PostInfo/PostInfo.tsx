import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo: React.FC<Post> = ({
  title, body, user, comments,
}) => (
  <div data-cy="post-info">
    <h2 data-cy="post-title">
      {title}
    </h2>

    <p data-cy="post-body">
      {body}
    </p>

    <UserInfo name={user.name} email={user.email} />

    <h3>
      Comments:
    </h3>

    <CommentList comments={comments} />
  </div>
);
