import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comments';

import './CommentList.scss';

interface Props {
  comments: Comment[]
}

export const CommentList: React.FC<Props> = ({ comments }) => {

  return (
    <>
      {comments.map(comment => (<CommentInfo key={comment.id} comment={comment} />))}
    </>
  )
}
