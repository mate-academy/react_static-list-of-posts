import React from 'react';
import { PreparedPosts } from '../../types/Types';
import { CommentList } from '../CommentList/CommentList';
import { UsersInfo } from '../UsersInfo/UsersInfo';
import './PostInfo.scss';

type Props = {
  post: PreparedPosts;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__post">
        <strong className="PostInfo__name" data-cy="post-title">
          {post?.title.toUpperCase()}
        </strong>

        <p className="PostInfo__item" data-cy="post-body">
          {post?.body}
        </p>

        <UsersInfo user={post.user} />
      </div>

      <div className="PostInfo__comments">
        <strong>COMMENTS:</strong>
        {post.comments
        && (
          <p className="PostInfo__item">
            <CommentList comments={post.comments} />
          </p>
        )}
      </div>
    </div>
  );
};
