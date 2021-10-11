import React from 'react';
import './PostInfo.scss';
import { Post } from '../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentsList } from '../CommentsList/CommentsList';

type Props = {
  props: Post,
};

export const PostInfo: React.FC<Props> = ({ props }) => {
  return (
    <div className="post">
      <h2 className="post__title">{props.title}</h2>
      <p className="post__text">{props.body}</p>
      <UserInfo user={props.user} />
      <CommentsList comments={props.comments} />
    </div>
  );
};
