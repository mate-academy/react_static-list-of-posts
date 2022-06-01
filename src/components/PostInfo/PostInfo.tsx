import React from 'react';
import './PostInfo.scss';
import { UnitedPost } from '../../react-app-env';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  currentPost: UnitedPost;
};

export const PostInfo: React.FC<Props> = ({ currentPost }) => (
  <div className="PostInfo" data-cy="post-info">
    <h3 className="PostInfo" data-cy="post-title">{currentPost.title}</h3>
    <p data-cy="post-body">{currentPost.body}</p>
    <h4>User information:</h4>
    <ul>
      <UserInfo currentUser={currentPost.user} />
    </ul>
    <h4>Comments:</h4>
    <CommentList comments={currentPost.comments} />
  </div>
);
