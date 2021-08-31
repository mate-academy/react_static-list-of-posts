import React from 'react';
import './PostInfo.scss';
import { User, UserInfo } from '../UserInfo/UserInfo';
import { Comment } from '../CommentInfo/CommentInfo';
import { CommentsList } from '../CommentsList/CommentsList';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | null,
  comments: Comment[] | null,
}

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
