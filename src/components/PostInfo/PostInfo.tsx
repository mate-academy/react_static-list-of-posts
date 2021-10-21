import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

import './PostInfo.scss';

type Props = {
  post: Post,
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
      <h2 className="post-title">{title}</h2>
      <p className="post-text">{body}</p>
      {user && (<UserInfo user={user} />)}
      {comments && (<CommentList comments={comments} />)}
    </div>
  );
};
