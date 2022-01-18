import { CommentInfo } from './CommentInfo';

type Props = {
  comments: Coment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    <h1>Comments:</h1>
    {comments.map(comment => <CommentInfo {...comment} />)}
  </>
);
