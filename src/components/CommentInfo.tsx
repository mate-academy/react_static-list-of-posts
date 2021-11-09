import { Comment } from '../types/Post';

interface Props {
  comment: Comment
}

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <div>{`Имя: ${comment.name}`}</div>
    <div>{`Комментарий: ${comment.body}`}</div>
    <div>{`Почта: ${comment.email}`}</div>
  </>
);
