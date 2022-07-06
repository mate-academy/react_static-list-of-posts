import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <article className="post" data-cy="post-info">
    <h2
      className="post__title"
      data-cy="post-title"
    >
      {post.title}
    </h2>

    <p
      className="post__text"
      data-cy="post-body"
    >
      {post.body}
    </p>

    <UserInfo user={post.user} />

    <CommentList comments={post.comments} />
  </article>
);
