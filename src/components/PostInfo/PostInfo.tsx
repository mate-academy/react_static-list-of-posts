import React from 'react';

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import { Post } from '../../type/Post';

import './PostInfo.scss'

type Props = {
  post: Post;
}

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    user,
    body,
    comments,
  } = post;

  console.log(user);
  

  return (
    <>
      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">{title}</h3>

          {user && <UserInfo user={user}/>}
        </div>

        <p className="PostInfo__body">
          {body}
        </p>

        <hr />

        {
          comments.length
          ? <CommentList comments={comments} />
          : <b data-cy="NoCommentsMessage">No comments yet</b>
        }
      </div>
    </>
  )
};
