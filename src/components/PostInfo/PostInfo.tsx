import React from 'react';
import { UserPost } from '../../types/UserPost';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: UserPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      <p>
        {' Posted by  '}
        <UserInfo user={post.user} />
      </p>
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <CommentList comments={post.commentsList} />
    {/* {post.commentsList
      ? <CommentList comments={post.commentsList} />
      : (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )} */}
  </div>
);
