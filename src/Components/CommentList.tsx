import { Comment } from '../types/Comment';
import { CommentInfo } from './CommentInfo';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="list">
    {
      comments.map(a => (
        <p className="list__item">
          <CommentInfo
            name={a.name}
            email={a.email}
            body={a.body}
          />
        </p>
      ))
    }
  </div>
);
