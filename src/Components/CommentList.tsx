import { CommentInfo } from './CommentInfo';

type Props = {
  comments: CommentItem[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    <h1>Comments:</h1>
    {comments.map(comment => <CommentInfo key={comment.id} {...comment} />)}
  </>
);
