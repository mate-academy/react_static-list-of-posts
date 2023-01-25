import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    user,
    body,
    comments,
  } = post;

  return (
    <div className="post-info event">
      <div className="content">
        <div className="summary">
          <h3 className="post-info__title">
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
            {comments.length > 0
              ? (
                <span data-cy="NoCommentsMessage">No comments</span>
              ) : (
                `${comments.length} comments`
              )}
          </a>
        </div>

        {comments.length > 0 && (
          <CommentList comments={comments} />
        )}
      </div>
    </div>
  );
};
