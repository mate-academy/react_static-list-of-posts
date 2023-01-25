import React from 'react';

import './PostInfo.scss';

import { FullPost } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

interface Prop {
  post: FullPost
}
export const PostInfo: React.FC<Prop> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {post.title}
      </h3>

      <p>
        {' Posted by  '}

        {post.user
          ? (<UserInfo user={post.user} />)
          : 'incognito'}
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    {post.comments.length > 0
      ? <CommentList comments={post.comments} />
      : (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}

  </div>
);
