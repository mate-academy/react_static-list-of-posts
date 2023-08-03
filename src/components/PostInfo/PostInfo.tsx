import React from 'react';
import { UserInfo } from '../UserInfo';
import { Posts } from '../../types/Posts';
import { CommentList } from '../CommentList';
import comments from '../../api/comments';
import filterCommentsByPost from '../../utils/filterCommentsByPost';

type Props = {
  post: Posts
};

export const PostInfo: React.FC<Props> = (
  {
    post:
    {
      title, user, body, id,
    },
  },

) => {
  const postComments = filterCommentsByPost(id, comments);

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {'Posted by  '}

          {user && <UserInfo user={user} />}
        </p>
      </div>

      <p className="PostInfo__body">{body}</p>

      <hr />
      {
        postComments.length > 0
          ? <CommentList comments={postComments} />
          : <b data-cy="NoCommentsMessage">No comments yet</b>
      }

    </div>
  );
};
