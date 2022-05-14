import React from 'react';
import './PostInfo.scss';

import { FBPost } from '../../interfaces/FBPost';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

interface Props {
  post: FBPost,
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <p>
    <hr />
    Title:&#160;&#160;
    <b>{post.title}</b>
    <br />
    User:&#160;&#160;
    {post.user ? (
      <UserInfo user={post.user} />
    ) : 'incognito user'}
    <br />
    Body:&#160;&#160;
    {post.body}
    <br />
    <hr />
    Comments section:&#160;&#160;
    <CommentList comments={post.comments} />
  </p>
);
