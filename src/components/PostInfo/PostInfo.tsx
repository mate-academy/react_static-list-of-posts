import React from 'react';
import { Users } from '../../types/users';
import { Comments } from '../../types/comments';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

import './PostInfo.scss';

type Props = {
  title: string;
  body: string;
  user: Users | null;
  comments: Comments[]
};

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => (
  <div className="PostInfo">
    <UserInfo user={user} />

    <h2>
      {title}
    </h2>

    <p>
      {body}
    </p>

    <CommentList comments={comments} />
  </div>
);
