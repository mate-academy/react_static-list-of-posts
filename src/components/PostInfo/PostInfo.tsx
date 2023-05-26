import React from 'react';
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

  return (
    <>
      <div className="PostInfo PostInfo__header">
        <p className="PostInfo__title">
          {title}
        </p>
        {user && (
          <UserInfo user={user} />
        )}

        <p className="PostInfo__body">
          {body}
        </p>

        { (!comments || comments.length === 0)
          ? <b data-cy="NoCommentsMessage">No comments yet</b>
          : <CommentList comments={comments} />}
      </div>
    </>
  );
};
