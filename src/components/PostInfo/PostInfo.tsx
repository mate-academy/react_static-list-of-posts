import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  post: PreparedPost,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <article className="post">
      <h2 className="post__title">
        {post.title}
      </h2>

      <p className="post__body">
        {post.body}
      </p>
      {post.author && <UserInfo author={post.author} />}
    </article>
    {post.postComments && <CommentList comments={post.postComments} />}
  </>
);
