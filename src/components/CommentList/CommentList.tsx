import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

import './CommentList.scss';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = (props) => (
  <div className="CommentList">
    {props.comments.map(comment => (
      <CommentInfo
        key={comment.id}
        name={comment.name}
        email={comment.email}
        body={comment.body}
      />
    ))}
  </div>
);
