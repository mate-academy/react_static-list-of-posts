import './CommentList.scss';

import { CommentInfo } from '../CommentInfo';

import { Comment } from '../../types/Comment';

interface Props {
  comments: Comment[]
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">

    <ul>
      {comments.map((comment: Comment) => (
        <li key={comment.id}>
          <CommentInfo
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        </li>
      ))}
    </ul>
  </div>
);
