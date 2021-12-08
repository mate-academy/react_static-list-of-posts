import React from 'react';
import './PostInfo.scss';

import { Post } from '../../types/Post';

import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo: React.FC<Post> = ({
  title,
  body,
  user,
  comments,
}) => (
  <div className="PostInfo">
    <div className="PostInfo__wrap PostInfoWrap">
      <h2 className="PostInfoWrap__title">{title}</h2>
      <p className="PostInfoWrap__desk">{body}</p>
      {user && <UserInfo {...user} />}
    </div>
    <CommentList comments={comments} />
  </div>
);
