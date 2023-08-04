/* eslint-disable no-nested-ternary */
import React from 'react';
import { Post } from '../../types/post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        {post.user
          ? (
            <UserInfo user={post.user} />
          )
          : null}

      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <hr />

      { post.comments
        ? post.comments.length !== 0
          ? <CommentList comments={post.comments} />
          : <b data-cy="NoCommentsMessage">No comments yet</b>
        : <b data-cy="NoCommentsMessage">No comments yet</b>}
    </div>
  </>
);
