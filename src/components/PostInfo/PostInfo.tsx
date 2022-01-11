import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import { PreparedPost } from '../../Types/Types';
import './PostInfo.scss';

type Props = {
  onePost: PreparedPost;
};

export const PostInfo:React.FC<Props> = (props) => {
  return (
    <div className="post">
      <div className="post__head">
        <h2 className="post__title">
          {props.onePost.title}
        </h2>
        <div className="post__user">
          {props.onePost.user ? (
            <UserInfo user={props.onePost.user} />
          ) : ('')}
        </div>
      </div>

      <p className="post__paragraph">
        {props.onePost.body}
      </p>

      {props.onePost.comments ? (
        <ul className="post__commnets_list">
          <h3>Comments:</h3>

          {props.onePost.comments.map((comment) => (
            <li className="post__commnets_list_item" key={comment.id}>
              <CommentList oneComment={comment} />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="post__commnets_list">
          No comments yet.
        </ul>
      )}
    </div>
  );
};
