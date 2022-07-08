import React from 'react';
import { PreparedPost } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  post: PreparedPost,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <section className="postAbout" data-cy="post-info">
    <h2 className="postAbout__title" data-cy="post-title">
      {post.title}
    </h2>

    <article className="postAbout__body" data-cy="post-body">
      {post.body}
    </article>

    {post.user && <UserInfo user={post.user} />}

    <CommentList comments={post.comments} />
  </section>
);
