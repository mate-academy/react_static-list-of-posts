import React from 'react';

import './PostInfo.scss';
import { CompletePost } from '../../types/CompletePost';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type PostInfoProps = {
  post: CompletePost,
};

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      { post.user
      && (
        <p>
          {' Posted by '}
          <UserInfo user={post.user} />
        </p>
      )}
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />
    {post?.comments.length
      ? <CommentList comments={post.comments} />
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
