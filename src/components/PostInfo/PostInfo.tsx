import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = (props) => {
  const { post } = props;
  const {
    title,
    user,
    body,
    comments,
  } = post;

  return (
    <>
      <h2 className="post__title">
        {title}
      </h2>

      { user && (
        <UserInfo user={user} />
      )}

      <p className="post__text">
        {body}
      </p>

      {comments && (
        <CommentList comments={comments} />
      )}
    </>
  );
};
