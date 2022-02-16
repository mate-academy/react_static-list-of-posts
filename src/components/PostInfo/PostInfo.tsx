import React from 'react';
import { Comment } from '../../types/Comment';
import { User } from '../../types/User';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  title: string;
  body: string;
  user: User;
  comments: Comment[];
};

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => {
  return (
    <>
      <h2 className="item__title">
        {title}
      </h2>
      <p className="item__text">
        {body}
      </p>
      <div>
        <UserInfo user={user} />
      </div>
      <div>
        <CommentList commentList={comments} />
      </div>
    </>
  );
};
