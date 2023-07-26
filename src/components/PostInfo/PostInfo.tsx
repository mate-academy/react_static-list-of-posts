import React from 'react';
import { Post } from '../../types/post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

type TypePostInfo = {
  post: Post;
};

export const PostInfo: React.FC<TypePostInfo> = ({ post }) => (
  <>
    <div className="PostInfo" key={post.id}>
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {post.title}
        </h3>

        <p>
          {' Posted by  '}

          {post.user && <UserInfo user={post.user} />}
        </p>
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      {!post.comment?.length
        ? (
          <>
            <hr />
            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>
        )
        : (
          <CommentList post={post} />
        )}
    </div>
  </>
);
