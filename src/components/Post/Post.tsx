import React from 'react';
import './Post.scss';

import { UserInfo } from '../User ';
import { CommentList } from '../CommentsList';
import { Post } from '../../types';

type Props = Post;

export const PostInfo: React.FC<Props> = ({
  title, body, user, comments,
}) => {
  return (
    <>
      <h2 className="post__title">{title}</h2>
      <p className="post__text">{body}</p>
      {user && <UserInfo {...user} />}

      <CommentList comments={comments} />
    </>
  );
};
