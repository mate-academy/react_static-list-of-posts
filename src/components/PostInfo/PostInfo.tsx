import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';

import { CommentList } from '../CommentList/CommentList';
import { PreparedPost } from '../../types/PreparedPost';

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
