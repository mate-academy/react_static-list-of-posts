import React from 'react';

import { CommentList } from '../CommentList/CommentList';
import { PreparedPost } from '../../types/PreparedPost';

import { UserInfo } from '../UserInfo/UserInfo';

type Props = PreparedPost;

export const PostInfo: React.FC<Props> = (post) => {
  return (
    <>
      <h3 className="post__title">{post.title}</h3>
      <p className="post__text">{post.body}</p>
      {post.user && <UserInfo {...post.user} />}
      <CommentList comments={post.comments} />
    </>
  );
};
