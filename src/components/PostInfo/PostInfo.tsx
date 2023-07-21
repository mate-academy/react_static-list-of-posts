import React from 'react';
import './PostInfo.scss';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type PostItemInfo = {
  post: Post;
};

export const PostInfo: React.FC<PostItemInfo> = ({ post }) => (

  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        {post.user && (<UserInfo user={post.user} />)}
      </p>

    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    {post.comments.length > 0
      ? (
        <CommentList comments={post.comments} />
      ) : (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}
  </div>
);
