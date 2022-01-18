import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

type Props = {
  preparedPost: Post,
};

export const PostInfo: React.FC<Props> = ({ preparedPost }) => (
  <div className="post">
    <h2 className="post__title">{preparedPost.title}</h2>
    <p className="post__body">{preparedPost.body}</p>
    <span className="post__user-info">{preparedPost.user && (<UserInfo user={preparedPost.user} />)}</span>
    <h3>Comments:</h3>
    <CommentList comments={preparedPost.comments} />
  </div>
);
