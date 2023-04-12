import React from 'react';
import { PreparedPosts } from '../../types/PreparedPosts';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import './PostInfo.scss';

interface Props {
  post: PreparedPosts;
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {post.title}
      </h3>

      <p>
        {post.user ? (
          <>
            {' Posted by '}

            <UserInfo user={post.user} />
          </>
        ) : (
          'Anonym'
        )}
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    {
      post.comments.length > 0
        ? <CommentList comments={post.comments} />
        : <b data-cy="NoCommentsMessage">No comments yet</b>
    }
  </div>
);
