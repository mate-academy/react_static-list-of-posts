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
      <h2 className="post__subTitle">
        {post.title}
      </h2>
      <p className="post__info">
        {post.body}
      </p>
      <div className="post__userInfo">
        {post.user && <UserInfo user={post.user} />}
      </div>
      <div className="post__comments">
        <CommentList comments={post.comments} />
      </div>
    </div>

  </>
);
