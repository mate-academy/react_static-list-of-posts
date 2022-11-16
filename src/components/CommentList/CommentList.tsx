import './CommentList.scss';

import { CommentInfo } from '../CommentInfo';

import { Comment } from '../../types/Comment';

interface Props {
  comments: Comment[]
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map((comment: Comment) => (
      <CommentInfo
        name={comment.name}
        email={comment.email}
        body={comment.body}
      />
    ))}
  </div>
);
