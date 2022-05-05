import React from 'react';
import { ReadyPosts } from '../../types/ReadyPosts';
import { UsersInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';
import Comments from '../../public/Comments.png';

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
        {
          (post.user)
            ? (
              <UsersInfo
                user={post.user}
              />
            )
            : 'No user'
        }
      </p>

      <img
        src={Comments}
        alt="img"
      />

      {post.comment
      && (
        <p>
          <CommentList comments={post.comment} />
        </p>
      )}
    </div>
  );
};
