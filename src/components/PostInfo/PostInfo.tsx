import React from 'react';
import { PreparedPost } from '../../types/PreparedPost';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: PreparedPost;
};

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
        <h3 className="PostInfo__title">{title}</h3>

        {user && (
          <p>
            {' Posted by  '}
            <UserInfo user={user} />
          </p>
        )}

      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      <CommentList comments={comments} />
    </div>
  );
};
