import React from 'react';

import { Post } from '../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo: React.FC<Post> = ({
  title,
  body,
  user,
  usersComments,
}) => (
  <>
    <div className="post__body">
      <h3 className="post__title">{title}</h3>

      <p className="post__text">{body}</p>

      {user && (
        <p className="post__userinfo">
          <UserInfo {...user} />
        </p>
      )}
    </div>

    <hr />

    {!!usersComments.length && (
      <div className="post__comments">
        <CommentList comments={usersComments} />
      </div>
    )}
  </>
);
