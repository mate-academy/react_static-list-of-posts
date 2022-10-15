import React from 'react';

import './PostInfo.scss';

import { Post } from '../../types/post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({
  post: {
    title,
    body,
    user,
    comments,
  },
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      <p>
        {' Posted by  '}

        {user ? <UserInfo user={user} /> : ''}
        
      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    <hr />
    <b data-cy="NoCommentsMessage">
      {comments.length !== 0
        ? <CommentList comments={comments} /> : 'No comments yet'}
    </b>
  </div>
);
