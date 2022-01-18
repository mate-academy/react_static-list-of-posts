import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo:React.FC<Post> = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
    <h2 className="post__title">{title}</h2>
    <p className="post__text">{body}</p>
    {user && <UserInfo {...user} />}
    <CommentList preparedComments={comments} />
  </>
);
