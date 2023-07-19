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
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {post.title}
        </h3>

        <p>
          {' Posted by  '}

          {post.user === null
            ? ''
            : <UserInfo user={post.user} />}
        </p>
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      {!post.comment
        ? (
          <>
            <hr />
            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>
        )
        : (
          <div className="CommentList">
            {post.comment.map((comment) => (
              <CommentList comment={comment} key={comment.id} />
            ))}
          </div>
        )}
    </div>
  </>
);
