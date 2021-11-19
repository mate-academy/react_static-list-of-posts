import React from 'react';
import { PreparedPostType } from '../../Types/PreparedPostType';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

import './PostInfo.scss';

export const PostInfo: React.FC<PreparedPostType> = ({
  title,
  body,
  user,
  comments,
}) => (
  <div className="postInfo">
    <div className="postInfo__main">
      <h2 className="postInfo__main__title">{title}</h2>
      <p className="postInfo__main__body">{body}</p>
    </div>
    <div className="postInfo__userInfo">
      {user && <UserInfo {...user} />}
      {comments && <CommentList comments={comments} />}
    </div>
  </div>
);
