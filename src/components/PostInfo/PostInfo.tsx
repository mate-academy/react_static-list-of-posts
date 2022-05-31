import React from 'react';
import './PostInfo.scss';
import { UnitedPost } from '../../react-app-env';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  currentPost: UnitedPost;
};

export const PostInfo: React.FC<Props> = ({ currentPost }) => (
  <div className="PostInfo" data-cy="post-info">
    <h3 className="PostInfo" data-cy="post-title">{currentPost.title}</h3>
    <p data-cy="post-body">{currentPost.body}</p>
    <h4>User information:</h4>
    <ul>
      <li data-cy="user-name">
        name:
        {currentPost.user?.name}
      </li>
      <li data-cy="user-email">
        email:
        {currentPost.user?.email}
      </li>
    </ul>
    <h4>Comments:</h4>
    <CommentList comments={currentPost.comments} />
  </div>
);
