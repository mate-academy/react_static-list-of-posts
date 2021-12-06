import React from 'react';

import { PrepPost } from '../../types/prepPosts';

import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post:PrepPost;
};

export const PostInfo:React.FC<Props> = ({ post }) => {
  return (
    <>
      {post.user && <UserInfo user={post.user} />}
      <div className="post__title">{post.title}</div>
      <p className="post__text">{post.body}</p>
      <img className="post__photo" src="https://picsum.photos/300/300" alt="randomIMG" />
      <CommentList comments={post.comments} />
    </>
  );
};
