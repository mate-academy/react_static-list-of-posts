import React from 'react';

import { Post } from '../../types/Post';

import { CommentsList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import './PostInfo.scss';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
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

    {post.comments && post.comments.length > 0
      ? (<CommentsList commentsArr={post.comments} />)
      : (<b data-cy="NoCommentsMessage">No comments yet</b>)}

  </div>
);
