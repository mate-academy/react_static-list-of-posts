import React from 'react';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import { CombinedType } from '../../types/CombinedType';

type Props = {
  post: CombinedType;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  return (
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
      {post.comments.length === 0 ? (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      ) : (
        <CommentList comments={post.comments} />
      )}
    </div>
  );
};
