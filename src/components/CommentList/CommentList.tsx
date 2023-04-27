import './CommentList.scss';

import { Comment } from '../../types/Comment';

import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = (({ comments }) => (
  <div className="PostList">
    {
      comments.map((comment) => (
        <CommentInfo
          comment={comment}
          key={comment.id}
        />
      ))
    }
  </div>

));
