import React from 'react';
import { Post } from '../../types/Post';

import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      {post.user ? <UserInfo user={post.user} /> : null}
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    {post.comment ? (
      <CommentList comment={post.comment} />
    )
      : (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}
  </div>
);
