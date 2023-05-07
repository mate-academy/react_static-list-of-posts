import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';

interface PostInfoProps {
  postInfo: Post
}

export const PostInfo: React.FC<PostInfoProps> = ({
  postInfo: { title, body, user },
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      <p>
        {' Posted by  '}

        {user ? <UserInfo userInfo={user} /> : undefined}
      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    <hr />

    <b data-cy="NoCommentsMessage">No comments yet</b>
  </div>
);
