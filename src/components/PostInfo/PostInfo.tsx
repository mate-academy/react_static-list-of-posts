import React from 'react';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { Post } from '../../types/Post';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <li className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {post.title}
      </h3>

      <p>
        {' Posted by  '}

        <UserInfo user={post.user} />
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <CommentList comments={post.comments} />
  </li>
);
