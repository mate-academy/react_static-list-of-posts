import React from 'react';
import './PostInfo.scss';
import { PostData } from '../../react-app-env';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

interface Props {
  post: PostData;
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <UserInfo user={post.user} />

    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    {
      post.comments?.length === 0
        ? (
          <>
            <hr />
            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>
        )
        : <CommentList comments={post.comments} />
    }
  </div>
);
