import React from 'react';

import { CommentList } from '../CommentList/Comment';
import { InfoPost } from '../../Types/InfoPost';

import { UserInfo } from '../UserInfo/UserInfo';

type Props = InfoPost;

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
