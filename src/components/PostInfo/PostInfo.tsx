import React from 'react';
import './PostInfo.scss';
import { UnitedPost } from '../../react-app-env';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  currentPost: UnitedPost;
};

export const PostInfo: React.FC<Props> = ({ currentPost }) => (
  <div className="PostInfo">
    <h3 className="PostInfo">{currentPost.title}</h3>
    <p>{currentPost.body}</p>
    <h4>User information:</h4>
    <ul>
      <li>
        name:
        {currentPost.user?.name}
      </li>
      <li>
        email:
        {currentPost.user?.email}
      </li>
    </ul>
    <h4>Comments:</h4>
    <CommentList comments={currentPost.comments} />
  </div>
);
