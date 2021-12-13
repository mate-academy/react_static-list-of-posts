import React from 'react';

import { CommentList } from '../CommentList/Comment';
import { InfoPost } from '../../Types/InfoPost';

import { UserInfo } from '../UserInfo/UserInfo';

type Props = InfoPost;

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => {
  return (
    <>
      <h3 className="post__title">{title}</h3>
      <p className="post__text">{body}</p>
      {user && <UserInfo {...user} />}
      <CommentList comments={comments} />
    </>
  );
};
