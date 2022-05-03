import React from 'react';
import { Post } from '../types/Post';
import { CommentList } from './CommentList';

import { UserInfo } from './UserInfo';

type Props = Omit<Post, 'id' | 'userId'>;

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  commentsList,
}) => {
  return (
    <>
      <div className="post">
        <h2 className="post__title" data-cy="post-title">
          {title}
        </h2>
        <p className="post__body" data-cy="post-body">
          {body}
        </p>
        {user && <UserInfo name={user.name} email={user.email} />}
      </div>
      <CommentList
        comments={commentsList}
      />
    </>
  );
};
