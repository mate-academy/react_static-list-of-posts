import React from 'react';
import './PostInfo.scss';

import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    id,
    title,
    body,
    comments,
    user,
  } = post;

  return (
    <li className="PostInfo" id={`${id}`}>
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          {user && <UserInfo user={user} />}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />
      {
        comments.length > 0
          ? <CommentList comments={comments} />
          : <b data-cy="NoCommentsMessage">No comments yet</b>
      }
    </li>
  );
};
