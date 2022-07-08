import React from 'react';
import { Coment } from '../CommentInfo/CommentInfo';
import { User } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export interface Post {
  user: User | null | undefined,
  comments: Coment [],
  userId: number;
  id: number;
  title: string;
  body: string;

}

type Props = {
  body: string;
  title: string;
};

export const PostInfo: React.FC<Props> = ({ body, title }) => (
  <div className="post_name">
    <h3 className="postTitle" data-cy="post-title">
      {title}
    </h3>
    <p className="postBody" data-cy="post-body">
      {body}
    </p>
  </div>
);
