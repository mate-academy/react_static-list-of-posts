import React from 'react';
import { Post } from '../../types/Post';
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
      <div className="PostInfo__main">
        <h2 className="PostInfo__title">{title}</h2>
        <p className="PostInfo__text">{body}</p>
        <div className="PostInfo__author">
          <UserInfo user={user} />
        </div>
      </div>
      <CommentList comments={comments} />
    </article>
  );
};
