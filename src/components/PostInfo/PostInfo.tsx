import React from 'react';

import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  title: string,
  body: string,
  user: User | null,
  comments: Coment[] | null,
};

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
    <h2>
      {title}
    </h2>
    <p>
      {body}
    </p>
    <UserInfo
      name={user?.name}
      email={user?.email}
    />
    <CommentList
      comments={comments}
    />
  </>
);
