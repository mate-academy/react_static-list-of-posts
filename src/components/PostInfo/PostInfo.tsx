import React from 'react';
import { PreparedPosts } from '../User';
import { CommentList } from '../Comment/CommentList';
import { UsersInfo } from '../UsersInfo/UsersInfo';
import './PostInfo.scss';

type Props = {
  post: PreparedPosts;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  return (
    <div className="PostInfo">
      <p className="PostInfo__name" data-cy="post-title">
        {post?.title.toUpperCase()}
      </p>

      <p className="PostInfo__item" data-cy="post-body">
        <span>
          {post?.body}
        </span>
      </p>

      <p className="PostInfo__item">
        <UsersInfo user={post.user} />
      </p>

      <h3>
        Comments
      </h3>

      {post.comment
      && (
        <p className="PostInfo__item">
          <CommentList comment={post.comment} />
        </p>
      )}
    </div>
  );
};
