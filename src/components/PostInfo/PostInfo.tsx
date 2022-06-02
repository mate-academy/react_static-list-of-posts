import React from 'react';
import './PostInfo.scss';
import { FullPost } from '../../react-app-env';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

interface Props {
  postCard: FullPost;
}

export const PostInfo: React.FC<Props> = ({ postCard }) => (
  <div className="post" data-cy="post-info">
    <h4 className="post__title" data-cy="post-title">
      {postCard.title}
    </h4>
    <p className="post__body" data-cy="post-body">
      {postCard.body}
    </p>
    {postCard.user && <UserInfo user={postCard.user} />}
    <p className="post__comments">All comments: </p>
    <CommentList listOfComments={postCard.comment} />
  </div>
);
