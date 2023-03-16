import React from 'react';

import './CommentList.scss';

import { CommentInfo } from '../CommentInfo/CommentInfo';

import { Comment } from '../../types/Comment';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  if (comments.length === 0) {
    return (
      <>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    );
  }

  return (
    <ul className="CommentList">
      {comments.map(comment => {
        const {
          id,
          name,
          email,
          body,
        } = comment;

        return (
          <li className="CommentInfo" key={id}>
            <CommentInfo
              name={name}
              email={email}
              body={body}
            />
          </li>
        );
      })}
    </ul>
  );
};
