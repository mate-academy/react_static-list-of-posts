import React from 'react';

import { PostType } from '../../Types/PostType';

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import './PostInfo.scss';

type Props = {
  post: PostType,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {post.title}
      </h3>

      {post.user && (
        <p>
          {' Posted by  '}

          <UserInfo user={post.user} />
        </p>
      )}
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    {post.comments.length > 0
      ? (<CommentList comments={post.comments} />)
      : (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}
  </div>
);
