import React from 'react';

import './PostInfo.scss';
import { CompletePost } from '../../types/CompletePost';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type PostInfoProps = {
  post: CompletePost,
};

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => {
  const {
    title,
    user,
    body,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        {user && (
          <p>
            {' Posted by '}
            <UserInfo user={user} />
          </p>
        )}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />
      {post?.comments.length
        ? <CommentList comments={comments} />
        : (
          <b
            className="PostInfo__NoCommentsMessage"
            data-cy="NoCommentsMessage"
          >
            No comments yet
          </b>
        )}
    </div>
  );
};
