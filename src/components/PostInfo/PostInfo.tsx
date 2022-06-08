import React from 'react';
import { PreparedPost } from '../../appTypeDefs';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

interface PostInfoProps {
  post: PreparedPost;
}

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => {
  const {
    title, body, user,
  } = post;

  return (
    <article data-cy="post-info">
      <section className="Post">
        <h2 data-cy="post-title">{title}</h2>
        <UserInfo user={user} />
        <p data-cy="post-body">{body}</p>
      </section>
      <CommentList
        postComments={post.postComments}
      />
    </article>
  );
};
