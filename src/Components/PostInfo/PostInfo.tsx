import React from 'react';
import './PostInfo.scss';
import { Post } from '../../Types/post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

interface Props {
  post: Post,
}

export const PostInfo: React.FC<Props> = ({ post }) => {
  // eslint-disable-next-line
  console.log(post.comment);

  return (
    <div className="post">
      <h2 data-cy="post-title" className="post__title">
        {post.title}
      </h2>
      <p data-cy="post-body" className="post__text">
        {post.body}
      </p>
      {post.user && <UserInfo user={post.user} />}
      {post.comment && <CommentList comments={post.comment} />}
    </div>
  );
};
