import React from 'react';

import './PostInfo.scss';

import { Post } from '../../types/post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post;
  posts: Post[];
};

export const PostInfo: React.FC<Props> = ({ post, posts }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        <UserInfo user={post.user} />
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />

    {post.comment ? (
      <CommentList posts={posts} />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
