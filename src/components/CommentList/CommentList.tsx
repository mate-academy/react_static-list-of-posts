import React from 'react';
import { Comment } from '../../Types/Comment';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    {(comments.length)
      ? (
        comments.map(comment => (
          <ul className="CommentList" key={comment.id}>
            <CommentInfo comment={comment} />
          </ul>
        ))
      ) : (
        <>
          <hr />

          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}
  </>
);
