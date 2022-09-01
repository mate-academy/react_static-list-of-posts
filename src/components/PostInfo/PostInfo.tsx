import React from 'react';

import './PostInfo.scss';

import { Post } from '../../types/Post';

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <li className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        {' Posted by  '}

        {user && <UserInfo user={user} />}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {
        comments
          ? <CommentList comments={comments} />
          : <b>No comments yet</b>
      }

    </li>
  );
};
