import React from 'react';

import { Post } from '../../types/Post';

import { CommentsList } from '../CommentsList';
import { UserInfo } from '../UserInfo';

import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo:React.FC<Props> = (props) => {
  const {
    post,
  } = props;

  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <>
      <div className="post__title" data-cy="post-title">
        {title}
      </div>

      <div className="post__body" data-cy="post-body">
        {body}
      </div>

      <div className="post__user user">
        <div className="user__title">Autor: </div>
        {user && (
          <UserInfo
            name={user.name}
            email={user.email}
          />
        )}
      </div>

      {comments && (
        <CommentsList
          comments={comments}
        />
      )}
    </>
  );
};
