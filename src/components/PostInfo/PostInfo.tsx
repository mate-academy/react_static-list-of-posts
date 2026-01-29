import React from 'react';
import { PostWithDetails } from '../../types/PostWithDetails';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

type Props = {
  post: PostWithDetails;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

        {post.user && (
          <p>
          {' Posted by  '}
            <UserInfo user={post.user} />
          </p>
        )}
      </div>
    <p className="PostInfo__body">{post.body}</p>

    {post.comments.length === 0 ? (
      <>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    ) : (
      <CommentList comments={post.comments} />
    )}
  </div>
);
