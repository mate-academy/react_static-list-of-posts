import React from 'react';
import { Posts } from '../../types/Posts';
import { Comments } from '../../types/Comments';

import commentsFromServer from '../../api/comments';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Posts,
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    id,
    userId,
    title,
    body,
  } = post;

  const comments: Comments[]
  = commentsFromServer.filter(comment => comment.postId === id);

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo userId={userId} />
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {comments.length
        ? <CommentList comments={comments} />
        : <b data-cy="NoCommentsMessage">No comments yet</b>}
    </div>
  );
};
