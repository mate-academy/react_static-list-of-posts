import React from 'react';
import { Comments } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo';

interface Props {
  comments: Comments[] | null,
  id: number,
}

export const CommentList: React.FC<Props> = ({
  comments,
  id,
}) => (
  <>
    {!comments?.length ? (
      <>
        <hr />
        <b data-cy="NoCommentsMessage" key={id}>
          No comments yet
        </b>
      </>
    ) : (
      <>
        {comments.map((comment) => (
          <div className="CommentList" key={comment.id}>
            <CommentInfo
              name={comment?.name}
              email={comment?.email}
              body={comment?.body}
            />
          </div>
        ))}
      </>
    )}
  </>

);
