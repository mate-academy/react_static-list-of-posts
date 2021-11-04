import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';
import { Prepared } from '../../typedefs';
import CommentList from '../CommentList';

type Props = {
  post: Prepared,
};

export const PostInfo:React.FC<Props> = ({ post }) => {
  return (
    <li className="list__item">
      <p className="list__item--title">{post.body}</p>
      <p>{post.title}</p>
      {post.user
        ? (
          <UserInfo user={post.user} />
        )
        : null}
      <CommentList comments={post.comments} />
    </li>
  );
};
