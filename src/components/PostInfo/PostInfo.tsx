import React from 'react';
import { UserInfo } from '../UserInfo';
import { FullPost } from '../../types/FullPost';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: FullPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title, user, body, comments,
  } = post;

  return (
    <div className="PostInfo">
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

      <CommentList comments={comments} />

    </div>
  );
};
