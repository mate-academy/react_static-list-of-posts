import React from 'react';

import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { Post } from '../../types/Post';

interface Props {
  post: Post;
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {post.title}
      </h3>

      <p>
        {' Posted by  '}

        <a className="UserInfo" href={`mailto:${post.user?.email}`}>
          {post.user?.name}
        </a>
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />

    {post.comment.length
      ? <CommentList comments={post.comment} />
      : (
        <b data-cy="NoCommentsMessage">
          No comments yet
        </b>
      )}
  </div>
);
