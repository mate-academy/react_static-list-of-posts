import React from 'react';

import commentsFromServer from '../../api/comments';

import './PostInfo.scss';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {post.title}
      </h3>

      {post.user !== null && (
        <UserInfo user={post.user} />
      )}
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    {!commentsFromServer.some(comment => comment.postId === post.id)
      ? (
        <>
          <hr />

          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )
      : (
        <CommentList comments={commentsFromServer
          .filter(comment => comment.postId === post.id)}
        />
      )}
  </>
);
