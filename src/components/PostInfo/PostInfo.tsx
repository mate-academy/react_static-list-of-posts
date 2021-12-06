import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo:React.FC<Props> = ({ post }) => {
  return (
    <>
      {post.user && <UserInfo user={post.user} />}
      <div className="post__title">{post.title}</div>
      <p className="post__text">{post.body}</p>
      <CommentList comments={post.comments} />
    </>
  );
};
