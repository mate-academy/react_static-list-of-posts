import React from 'react';
import { CommentList } from '../CommentList';
import { PreparedPost } from '../../types/PreparedPost';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

interface Props {
  post: PreparedPost;
}

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    user,
    body,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <p>
          {' Posted by  '}

          {user
            ? <UserInfo user={user} />
            : <b>Unknown user</b>}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      <CommentList comments={comments} />
    </div>
  );
};
