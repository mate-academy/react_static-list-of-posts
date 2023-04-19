import React from 'react';
import commentsFromServer from '../../api/comments';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  postId: number,
};

export const CommentList: React.FC<Props> = ({ postId }) => {
  const filteredComments = commentsFromServer.filter(
    (element: Comment) => element.postId === postId,
  );

  return (
    <div className="CommentList">
      {filteredComments.length > 0
        ? filteredComments.map(
          el => (
            <CommentInfo
              key={el.id}
              name={el.name}
              email={el.email}
              body={el.body}
            />
          ),
        )
        : <b data-cy="NoCommentsMessage">No comments yet</b>}
    </div>
  );
};
