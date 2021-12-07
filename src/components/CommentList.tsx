import { CommentInfo } from './CommentInfo';

interface Comments {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

type Props = {
  commentsArray: Comments[]
};

export const CommentList: React.FC<Props> = ({ commentsArray = [] }) => (
  <ul>
    {commentsArray.map((comment) => (
      <li key={comment.id}>
        <CommentInfo
          name={comment.name}
          body={comment.body}
          email={comment.email}
        />
      </li>
    ))}
  </ul>
);
