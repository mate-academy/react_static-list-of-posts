import React from 'react';
import { ArrangedPost } from '../../types/ArrangedPost';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: ArrangedPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <div className="PostInfo" key={post.id}>
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        {
          user
            ? <UserInfo user={user} />
            : <span>unknown user</span>
        }
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <CommentList comments={comments} />
    </div>
  );
};
