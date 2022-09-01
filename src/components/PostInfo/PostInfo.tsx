import React from 'react';

import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {post.title}
      </h3>

      {' Posted by  '}

      {post.user && <UserInfo user={post.user} key={post.user.id} />}
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />

    {post.comments && post.comments.length > 0
      ? <CommentList comments={post.comments} />
      : (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}
  </div>
);
