import React from 'react';
import { Post } from '../../types/api.types';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

type PostInfoProps = {
  post: Post,
};

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          {post.user !== null && <UserInfo user={post.user} />}
        </p>
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <hr />

      {post.comments.length
        ? <CommentList key={post.id} comments={post.comments} />
        : <b data-cy="NoCommentsMessage">No comments yet</b>}

    </div>
  );
};
