import React from 'react';
import classNames from 'classnames';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import './PostInfo.scss';
import { UserInfo } from '../UserInfo';

interface PostInfoProps {
  post: Post;
}

export const PostInfo: React.FC <PostInfoProps> = ({ post }) => {
  const {
    title, body, user, comments,
  } = post;

  const postInfoClasses = classNames(
    'PostInfo',
    'PostInfo__header',
  );

  return (
    <>
      <div className={postInfoClasses}>
        <p className="PostInfo__title">
          {title}
        </p>
        {user && (
          <UserInfo user={user} />
        )}

        <p className="PostInfo__body">
          {body}
        </p>

        {comments && <CommentList comments={comments} />}
      </div>
    </>
  );
};
