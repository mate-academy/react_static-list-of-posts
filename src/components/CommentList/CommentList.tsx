/* eslint-disable implicit-arrow-linebreak */

import React from 'react';
import commentsFromServer from '../../api/comments';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  postId: number,
};

export const CommentList: React.FC<Props> = ({ postId }) => {
  const found = (element: Comment) => element.postId === postId;
  const filtered = commentsFromServer.filter(found);

  return (
    <div className="CommentList">
      {filtered.length > 0
        ? filtered.map(el =>
          <CommentInfo name={el.name} email={el.email} body={el.body} />)
        : <b data-cy="NoCommentsMessage">No comments yet</b>}
    </div>
  );
};
