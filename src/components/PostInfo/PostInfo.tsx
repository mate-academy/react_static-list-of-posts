import React from 'react';
import { PreparedPosts } from '../../react-app-env';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

interface Props {
  post: PreparedPosts;
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <li
    data-cy="post-info"
    className="
    bg-success p-2 bg-opacity-25
    post_info
    border
    border-info
    rounded
    "
  >
    <h2
      className="border-bottom"
      data-cy="post-title"
    >
      {post.title}
    </h2>
    <p className="post_info_body" data-cy="post-body">{post.body}</p>
    {post.user && (<UserInfo user={post.user} />)}
    {post.comments && (<CommentList comments={post.comments} />)}
  </li>
);
