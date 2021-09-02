import React from 'react';
import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const { comment } = props;

  return (
    <article className="container">
      <blockquote>
        <header>
          {'comments by: '}
          <strong>
            {comment.name}
          </strong>
        </header>
        <p>
          {comment.body}
        </p>
        <footer>
          <cite title="Source Title">
            {comment.email}
          </cite>
        </footer>
      </blockquote>
    </article>
  );
};
