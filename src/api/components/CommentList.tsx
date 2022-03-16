import { CommentInfo } from './CommentInfo';

type Props = {
  comments: PostComment[];
};

export const CommentList: React.FC<Props> = ({ comments = [] }) => (
  <>
    {comments.map(comment => (
      <>
        <CommentInfo comment={comment} />
      </>
    ))}
  </>
);
