import { Comment } from '../../types/comment';

export const CommentInfo: React.FC<{ comment: Comment }> = props => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{props.comment.name}</strong>

      {` by `}

      <a className="CommentInfo__email" href={`mailto:${props.comment.email}`}>
        {props.comment.email}
      </a>
    </div>

    <div className="CommentInfo__body">{props.comment.body}</div>
  </div>
);
