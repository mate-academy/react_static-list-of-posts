import React from 'react';
import './PostInfo.scss';

import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import { Post } from '../types';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <article className="post-wrapper">
    <section className="post">
      <h2 className="post__title" data-cy="post-title">{post.title}</h2>
      <UserInfo user={post.user} />
      <div className="post__body" data-cy="post-body">{post.body}</div>
    </section>
    <CommentList comments={post.postComments} />
  </article>
);
