import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import { PreparedPost } from '../../Types/Types';

type Props = {
  onePost: PreparedPost;
};

export const PostInfo:React.FC<Props> = (props) => {
  return (
    <div>
      <h2>
        {props.onePost.title}
      </h2>

      {props.onePost.body}

      {props.onePost.user ? (
        <UserInfo user={props.onePost.user} />
      ) : ('')}

      {props.onePost.comments ? (
        <ul>
          <h3>Comments:</h3>

          {props.onePost.comments.map((comment) => (
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
