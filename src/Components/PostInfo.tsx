import React from 'react';
import UserInfo from './UserInfo';
import CommentList from './CommentList';

import { User, Comment } from '../Types';

type Props = {
  title: string,
  body: string,
  user: User | undefined,
  comments: Comment[],
};

const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
    <h2 className="post__title">{title}</h2>
    <p className="post__body">{body}</p>
    {user && (
      <div className="post__user user">
        <UserInfo user={user} />
      </div>
    )}
    <CommentList comments={comments} />
  </>
);

export default PostInfo;
