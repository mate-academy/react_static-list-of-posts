import React from 'react';
import './PostInfo.scss';
import { Post } from '../../type/Post';

import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommontList';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = (props) => {
  const { post } = props;

  return (
    <div className="post">
      <h2 className="post__title">
        Post Title:
        {' '}
        {post.title}
      </h2>
      <p className="post__body">
        Post:
        {' '}
        {post.body}
      </p>
      {post.user && <UserInfo userInfo={post.user} />}
      {post.comments && <CommentList commentList={post.comments} />}
    </div>
  );
};
