import React from 'react';
import './PostInfo.scss';

import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import { Post } from '../../react-app-env';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="post-title" data-cy="post-title">{post.title}</div>
    <p data-cy="post-body">{post.body}</p>
    <div className="post-user">
      <UserInfo user={post.user} />
    </div>
    <CommentList comments={post.comments} />
  </>
);
