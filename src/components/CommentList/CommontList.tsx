import React from 'react';

import { Comment } from '../../type/Comment';

import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  commentList: Comment[],
};

export const CommentList: React.FC<Props> = (props) => {
  const { commentList } = props;

  return (
    <>
      <h4>
        Comments:
      </h4>
      <ul>
        {commentList.map(comment => {
          return (
            <li
              key={comment.id}
            >
              <CommentInfo commentInfo={comment} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
