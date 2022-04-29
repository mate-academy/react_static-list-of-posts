import React from 'react';
import { PreparedPosts } from '../User';
import { CommentList } from '../Comment/CommentList';
import { UsersInfo } from '../UsersInfo/UsersInfo';
import comments from '../../api/comments';
import './PostInfo.scss';

type Props = {
  post: PreparedPosts;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  return (
    <div className="UserInfo">
      <p className="UserInfo__item" data-cy="post-title">
        {post?.title}
      </p>

      <p className="UserInfo__item" data-cy="post-body">
        <span>
          {post?.body}
        </span>
      </p>

      <p className="UserInfo__item">
        <UsersInfo user={post.user} />
      </p>

      <p className="UserInfo__item">
        <CommentList comment={comments} />
      </p>
    </div>
  );
};
