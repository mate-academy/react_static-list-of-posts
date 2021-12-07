import { Comments } from '../../types/Comments';

type Props = {
  comments: Comments,
};

export const CommentInfo: React.FC<Props> = ({ comments }) => (
  <>
    <p>
      {comments.name}
    </p>

    <p>
      {comments.email}
    </p>

    <p>
      {comments.body}
    </p>

  </>
);
