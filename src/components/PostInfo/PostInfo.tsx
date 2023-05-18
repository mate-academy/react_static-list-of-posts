import React from 'react';
import './PostInfo.scss';

import { Post } from '../../types/post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      {post.user ? <UserInfo user={post.user} /> : ''}
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>
    <hr />
    {post.comment
      ? <CommentList comments={post.comment} />
      : <b data-cy="NoCommentsMessage">No comments yet</b> }
  </div>
);
