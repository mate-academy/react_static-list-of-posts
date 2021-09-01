import React from 'react';
import { Post } from '../../types/Post/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

import './PostInfo.scss';

interface Props {
  postItem: Post,

}
export const PostInfo: React.FC<Props> = (props) => {
  const { postItem } = props;
  const {
    title,
    body,
    user,
    comments,
  } = postItem;

  return (
    <div className="post">
      <div className="post__title">{title}</div>
      <div className="post__content">{body}</div>
      {user && (
        <UserInfo userItem={user} />)}
      {comments && (
        <CommentList commentsForPost={comments} />)}
    </div>
  );
};
