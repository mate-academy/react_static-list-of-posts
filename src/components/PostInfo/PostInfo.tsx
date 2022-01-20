import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <h2 className="PostInfo__title">{post.title}</h2>
    <p className="PostInfo__body">{post.body}</p>
    <p className="PostInfo__user">{post.user === null ? '' : (<UserInfo user={post.user} />)}</p>
    <p className="PostInfo__comment"><CommentList comments={post.comments} /></p>
  </div>
);
