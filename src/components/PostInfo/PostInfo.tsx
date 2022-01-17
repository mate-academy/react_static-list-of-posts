import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import { PreparedPost } from '../../Types/Types';
import './PostInfo.scss';

type Props = {
  onePost: PreparedPost;
};

export const PostInfo:React.FC<Props> = ({ onePost }) => {
  return (
    <div className="post">
      <div className="post__head">
        <h2 className="post__title">
          {onePost.title}
        </h2>
        <div className="post__user">
          {onePost.user ? (
            <UserInfo user={onePost.user} />
          ) : ('')}
        </div>
      </div>

      <p className="post__paragraph">
        {onePost.body}
      </p>

      {onePost.comments ? (
        <ul>
          <h3>Comments:</h3>

          {onePost.comments.map((comment) => (
            <li key={comment.id}>
              <CommentList oneComment={comment} />
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          No comments yet.
        </ul>
      )}
    </div>
  );
};
