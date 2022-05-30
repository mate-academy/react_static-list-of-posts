import React from 'react';
import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import { PreparedPost } from '../../react-app-env';

type Props = {
  post: PreparedPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="post">
      <h2 className="post__subTitle" data-cy="post-title">
        {post.title}
      </h2>
      <p className="post__info" data-cy="post-body">
        {post.body}
      </p>
      <div className="post__userInfo">
        <div data-cy="post-info">
          {post.user && <UserInfo user={post.user} />}
        </div>
      </div>
      <div className="post__comments">
        <CommentList comments={post.comments} />
      </div>
    </div>

  </>
);
