import React from 'react';
import { Post } from '../../Types/Post';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  info: Post;
};

export const PostInfo: React.FC<Props> = ({ info }) => (
  <div className="card" data-cy="post-info">
    <h2 data-cy="post-title">{info.title}</h2>
    <p data-cy="post-body">{info.body}</p>
    <UserInfo user={info} />
    <CommentInfo comment={info} />
  </div>
);

export default PostInfo;
