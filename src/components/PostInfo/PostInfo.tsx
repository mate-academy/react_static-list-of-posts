import React from 'react';

import './PostInfo.scss';

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { User } from '../../types/Users';
import { Comment } from '../../types/Comments';

type Props = {
  title: string;
  user: User | null;
  body: string;
  comments: Comment[];
};

export const PostInfo: React.FC<Props> = ({ title, user, body, comments }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      <p>
        {' Posted by  '}
        {user && <UserInfo name={user.name} email={user.email} />}
      </p>
    </div>

    <p className="PostInfo__body">{body}</p>

    <hr />

    <CommentList comments={comments} />
  </div>
);
