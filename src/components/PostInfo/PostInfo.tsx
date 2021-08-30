import React from 'react';

import './PostInfo.scss';
import { Post } from '../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    usersComments,
  } = post;

  return (
    <article className="post">
      <div className="post__body">
        <h3 className="post__title">{title}</h3>

        <p className="post__text">{body}</p>

        {user && (
          <p className="post__userinfo">
            <UserInfo user={user} />
          </p>
        )}
      </div>

      <hr />

      {!!usersComments.length && (
        <div className="post__comments">
          <h3 className="post__comments-title">Comments:</h3>
          <CommentList comments={usersComments} />
        </div>
      )}
    </article>
  );
};
