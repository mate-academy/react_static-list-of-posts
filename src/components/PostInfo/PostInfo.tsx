import React from 'react';
import { Post } from '../../Types/Post';

import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

import '../PostList/PostList.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h2 className="post__title" data-cy="post-title">{post.title}</h2>
    <p className="post__body" data-cy="post-body">{post.body}</p>
    <UserInfo user={post.user} />
    <CommentList comments={post.comments} />
  </>
);
