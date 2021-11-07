import { Comments } from '../types/Post';

type Props = {
  comment: Comments
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <div>{`Имя: ${comment.name}`}</div>
    <div>{`Комментарий: ${comment.body}`}</div>
    <div>{`Почта: ${comment.email}`}</div>
  </>
);
