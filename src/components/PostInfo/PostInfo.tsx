import React from 'react';
import { Post } from '../../types/Post';
import './PostInfo.scss';
import { CommentList } from '../CommentList';

export const PostInfo: React.FC<{ postInfoPost: Post }> = ({
  postInfoPost: { title, user, body, comments },
}) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          <a className="UserInfo" href="mailto:Sincere@april.biz">
            {user?.name}
          </a>
        </p>
      </div>

      <p className="PostInfo__body">{body}</p>

      <hr />

      {comments ? (
        <CommentList commentListComments={comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
