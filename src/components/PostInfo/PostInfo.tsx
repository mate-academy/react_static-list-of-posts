import React from 'react';
import './PostInfo.scss';
import { PostType } from '../../types/PostType';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: PostType;
};

export const PostInfo: React.FC <Props> = ({ post }) => (
  <li className="PostInfo">
    <h2>{post.title}</h2>
    <p>{post.body}</p>

    { post.user
      ? <UserInfo user={post.user} />
      : null}

    <CommentList comments={post.comments} />
  </li>
);
