import React from 'react';
import { PreparedPosts } from '../../types/interfaces';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

type Props = {
  post: PreparedPosts,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="post-info">
    <h2
      className="post-info__title"
      data-cy="post-title"
    >
      {`Title: ${post.title}`}
    </h2>
    <h3
      className="post-info__body"
      data-cy="post-body"
    >
      {`Body: ${post.body}`}
    </h3>
    <h3 className="post-info__user">User:</h3>
    {post.user && <UserInfo user={post.user} />}
    <h3 className="post-info__comments">Comments:</h3>
    {post.comments && <CommentList comments={post.comments} />}
  </div>
);
