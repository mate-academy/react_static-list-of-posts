import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = (
  {
    post: {
      title, body, user, comments,
    },
  },
) => (
  <div className="PostInfo event">
    <div className="content">
      <div className="summary">
        <h3 className="PostInfo__title">
          {title}
        </h3>
        <span>
          {'posted by: '}
        </span>
        {user
          ? <UserInfo user={user} />
          : 'anonymous'}
      </div>

      <div className="extra text">
        {body}
      </div>

      <div className="meta">
        <a className="comment" href="#comment">
          <i className="comment icon" />
          {!comments.length ? (
            <span data-cy="NoCommentsMessage">No comments</span>
          ) : (
            `${comments.length} comments`
          )}
        </a>
      </div>

      {!!comments.length && (<CommentList comments={comments} />)}
    </div>
  </div>
);
