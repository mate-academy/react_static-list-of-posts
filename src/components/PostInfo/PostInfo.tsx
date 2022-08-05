import React from 'react';
import comments from '../../api/comments';

import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo: React.FC<Post> = ({
  title, body, user, comment,
}) => (
  <>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      {' Posted by  '}

      {user ? <UserInfo {...user} /> : null}
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    <hr />
    {comment ? (
      <CommentList comments={comments} />
    ) : <b>No comments yet</b>}
  </>
);
