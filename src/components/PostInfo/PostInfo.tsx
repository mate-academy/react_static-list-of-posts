import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = props => {
  const { post } = props;
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <div>
      <div>{title}</div>
      <div>{body}</div>
      {user && (<UserInfo user={user} />)}
      {comments && (<CommentList comments={comments} />)}
    </div>
  );
};
