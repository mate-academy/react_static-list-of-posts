import React from 'react';

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = (props) => {
  const { post } = props;
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <article className="PostInfo">
      <div>
        <h2 className="PostInfo__title">{title}</h2>
        <p className="PostInfo__text">{body}</p>
      </div>
      <UserInfo user={user} />
      <CommentList comments={comments} />
    </article>
  );
};
