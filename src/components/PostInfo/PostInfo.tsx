import React from 'react';

import { CommentInfo } from '../CommentInfo/CommentInfo';
import { PostTypes } from '../../types/PostTypes';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  postInfo: PostTypes
};

export const PostInfo: React.FC<Props> = ({ postInfo }) => (
  <div className="post">
    <h2 className="post__title">{postInfo.title}</h2>
    <p className="post__text">{postInfo.body}</p>
    {postInfo.user && (
      <UserInfo user={postInfo.user} />
    )}
    <CommentInfo comments={postInfo.comments} />
  </div>
);
