import React from 'react';
import { ReadyPosts } from '../../types/ReadyPosts';
import { UsersInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

type Props = {
  post: ReadyPosts,
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  return (
    <div className="postInfo">
      <div className="postInfo__title" data-cy="post-title">
        <img
          className="postInfo__title-image"
          src="https://img.icons8.com/ios/50/000000/tag-window.png"
          alt="TitleImage"
        />
        <p className="postInfo__title-name">{post?.title.toUpperCase()}</p>
      </div>

      <div className="postInfo__body" data-cy="post-body">
        <img
          className="postInfo__body-image"
          src="https://img.icons8.com/ios/50/000000/document--v1.png"
          alt="BodyImage"
        />
        <span className="postInfo__body-text">
          {post?.body}
        </span>
      </div>

      <p>
        <UsersInfo user={post.user} />
      </p>

      <img
      // eslint-disable-next-line
        src="https://img.icons8.com/external-flaticons-lineal-flat-icons/64/000000/external-comments-customer-feedback-flaticons-lineal-flat-icons.png"
        alt="img"
      />

      {post.comment
      && (
        <p>
          <CommentList comment={post.comment} />
        </p>
      )}
    </div>
  );
};
