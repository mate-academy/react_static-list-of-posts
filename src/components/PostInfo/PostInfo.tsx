import React from 'react';
import { PostWithAllDate } from '../../types/postWithAllDate';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

type Props = {
  post: PostWithAllDate
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{ post.title }</h3>

      <UserInfo user={post.user} />
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />

    {post.comments.length < 1
      ? <b data-cy="NoCommentsMessage">No comments yet</b>
      : <CommentList comments={post.comments} />}
  </div>
);
