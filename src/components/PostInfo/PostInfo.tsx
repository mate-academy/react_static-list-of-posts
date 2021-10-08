import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

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
    <div>
      <div>{title}</div>
      <div>{body}</div>
      {user && (
        <UserInfo userItem={user} />)}
      {comments && (
        <CommentList commentsForPost={comments} />)}
    </div>
  );
};
