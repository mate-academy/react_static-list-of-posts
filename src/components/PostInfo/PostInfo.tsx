import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import { Post } from '../../types/Post';

type Props = Post;

export const PostInfo: React.FC<Props> = ({
  title, body, user, comments,
}) => {
  return (
    <>
      <h4 className="post__title">{title}</h4>
      <p className="post__text">{body}</p>
      {user && <UserInfo {...user} />}
      <CommentList comments={comments} />
    </>
  );
};
