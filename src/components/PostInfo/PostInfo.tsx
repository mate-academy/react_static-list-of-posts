import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo" data-cy="post-info">
    <div className="PostInfo__header">
      <h3
        className="PostInfo__title"
        data-cy="post-title"
      >
        {post.title}
      </h3>

      {post.user && (
        <>
          {' Posted by  '}

          <UserInfo user={post.user} />
        </>
      )}
    </div>

    <p className="PostInfo__body" data-cy="post-body">
      {post.body}
    </p>

    <hr />

    {post.comments.length === 0 ? (
      <b>No comments yet</b>
    ) : (
      <CommentList comments={post.comments} />
    )}
  </div>
);
