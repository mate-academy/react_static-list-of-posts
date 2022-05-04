import React from 'react';

import { UserInfo } from '../UserInfo/UserInfo';
import { CommentsList } from '../CommentsList/CommentsList';

import { Post } from '../../types/Posts';

import './PostInfo.scss';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <li className="postInfo" key={post.id}>
    <h2 className="postInfo__title">
      {post.title}
    </h2>
    <UserInfo user={post.user} />
    <p className="postInfo__body">
      {post.body}
    </p>
    <CommentsList comments={post.comment} />
  </li>
);
