import React from 'react';
import './PostInfo.scss';
import { PreparedPosts } from '../../react-app-env';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: PreparedPosts,
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    comments,
  } = post;

  return (
    <>
      <h3 className="post__title" data-cy="post-title">
        {title}
      </h3>

      <div className="post__body" data-cy="post-body">
        {body}
      </div>
      {post.user && (<UserInfo user={post.user} />)}
      <CommentList comments={comments} />
    </>
  );
};
