import React from 'react';
import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import { PreparedPost } from '../../types/PreparedPost';
import { NoComments } from '../CommentList/NoComments';

type Props = {
  post: PreparedPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        <span> Posted by </span>
        {post.user && <UserInfo user={post.user} />}
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    {post.comments.length !== 0
      ? <CommentList comments={post.comments} />
      : <NoComments />}
  </div>
);
