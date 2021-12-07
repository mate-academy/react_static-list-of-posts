import React from 'react';
import { UserInfo } from '../UserInfo';
import { Comment } from '../../types/Comment';
import { User } from '../../types/User';

import './PostInfo.scss';
import { CommentInfo } from '../CommentInfo';

type Props = {
  id: number;
  title: string;
  body: string;
  user: User | null;
  comments: Comment[] | null;
};

export const PostInfo: React.FC<Props> = ({
  id, title, body, user, comments,
}) => {
  return (
    <article className="post App__posts-item">
      <div className="post__id-wrapper">
        <span className="post__id">{id}</span>
      </div>

      <h2 className="post__title">{title}</h2>

      <p className="post__body">{body}</p>

      {user && <UserInfo name={user.name} email={user.email} />}

      {comments && <CommentInfo comments={comments} />}
    </article>
  );
};
