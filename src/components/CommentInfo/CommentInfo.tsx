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
          <small>
            {comment.name}
          </small>
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
