import React from 'react';

import { Post } from '../../types/Post';
import { CommentInfo } from '../CommentInfo';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  return (
    <>
      <h3 className="fullPost__title">{post.title}</h3>
      <p className="fullPost__body">{post.body}</p>
      {post.user && (<UserInfo user={post.user} /> || null)}
      {post.comments && (<CommentInfo comments={post.comments} /> || null)}
    </>
  );
};
