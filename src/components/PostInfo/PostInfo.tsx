import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

export interface PostInfoProps {
  post: Post,
}
export const PostInfo: React.FC<PostInfoProps> = ({
  post: {
    title, body, user, comments,
  },
}) => (

  <>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          {user && <UserInfo user={user} key={user.id} />}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {comments.length > 0
        ? <CommentList comments={comments} />
        : <b data-cy="NoCommentsMessage">No comments yet</b>}
    </div>
  </>
);
