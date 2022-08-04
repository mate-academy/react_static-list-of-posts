import { Comments } from '../../types/Comments';

type Props = {
  comments : Comments,
};

export const CommentInfo: React.FC<Props> = ({ comments }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{comments.name}</strong>

      {' by '}

      <a
        className="CommentInfo__email"
        href={`mailto:${comments.email}`}
      >
        {comments.email}
      </a>
    </div>

    <div className="CommentInfo__body">
      {comments.body}
    </div>
  </div>
);
