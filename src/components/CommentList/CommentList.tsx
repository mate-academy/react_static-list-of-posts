import { Post } from '../Post/Post';
import { Comment } from '../../types/types';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="Comments">
    {comments.map(comment => {
      return (
        <Post
          classes="Comments"
          body={comment.body}
          name={comment.name}
          email={comment.email}
        />
      );
    })}
  </div>
);
