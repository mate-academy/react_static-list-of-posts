import React from 'react';
import { FullPost } from '../../react-app-env';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  post: FullPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div data-cy="post-info" className="message is-primary">
    <div className="message-header">
      <div>{post.title}</div>
      <div>{post.body}</div>
    </div>
    {post.user && <UserInfo user={post.user} />}
    <CommentList comments={post.comments} />
  </div>
);
