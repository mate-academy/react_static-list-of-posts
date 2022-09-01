import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  postInfo: Post,
};

export const PostInfo: React.FC<Props> = ({ postInfo }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{postInfo.title}</h3>

      {postInfo.user && <UserInfo user={postInfo.user} />}
    </div>

    <p className="PostInfo__body">
      {postInfo.body}
    </p>

    <hr />

    {
      postInfo.comments
        ? <CommentList comments={postInfo.comments} />
        : <b>No comments yet</b>
    }

  </div>
);
