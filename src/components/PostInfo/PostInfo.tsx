import React from 'react';

import './PostInfo.scss';
import { PostPrepared } from '../../types/postsPrepared';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

interface Props {
  post: PostPrepared,
}

export const PostInfo: React.FC<Props> = ({ post }) => {
  if (!post.user) {
    throw new Error('The author of the post was not found');
  }

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo key={post.userId} user={(post.user)} />
        </p>
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <hr />

      {(post.comments && post.comments?.length > 0)
        ? <CommentList comments={post.comments} />
        : <b data-cy="NoCommentsMessage">No comments yet</b>}

    </div>

  );
};
