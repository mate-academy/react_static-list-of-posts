import React from 'react';
import { CopyPost } from '../../types/CopyPost';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comments';

type Props = {
  post: CopyPost;
};

export const CommentList: React.FC<Props> = ({ post }) => (
  <>
    {post.comments.length > 0 ? (
      <div className="CommentList">
        {post.comments.map((comment: Comment) => {
          return (
            <CommentInfo key={comment.id} comment={comment} />
          );
        })}
      </div>
    ) : (
      <>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    )}
  </>
);
