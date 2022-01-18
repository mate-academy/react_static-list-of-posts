import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import { PreparedPost } from '../../Types/Types';
import './PostInfo.scss';

type Props = {
  onePost: PreparedPost;
};

export const PostInfo:React.FC<Props> = ({ onePost }) => (
  <div className="post">
    <div className="post__head">
      <h2 className="post__title">
        {onePost.title}
      </h2>
      {onePost.user && (
        <div className="post__user">
          <UserInfo user={onePost.user} />
        </div>
      )}
    </div>

    <p className="post__paragraph">
      {onePost.body}
    </p>

    {onePost.comments.length > 0
      ? <CommentList comments={onePost.comments} />
      : (
        <ul>
          No comments yet.
        </ul>
      )}
  </div>
);
