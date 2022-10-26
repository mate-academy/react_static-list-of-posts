import React from 'react';
import { CommentList } from '../CommentList';
import { Post } from '../../types/Post';

export const PostInfo: React.FC<Post> = ({ title, body, user, comments}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      <p>
        {' Posted by  '}

        <a className="UserInfo" href={user?.email}>
          {user?.name}
        </a>
      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    <CommentList comments={comments} />
  </div>
);
