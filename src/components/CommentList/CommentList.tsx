import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  commentList: Comment[],
};

export const CommentList: React.FC<Props> = ({ commentList }) => (
  <>
    <h2>Comments:</h2>
    <ul>
      {commentList.map(comment => {
        const {
          name,
          email,
          body,
          id,
        } = comment;

        return (
          <li key={id}>
            <CommentInfo
              name={name}
              email={email}
              body={body}
            />
          </li>
        );
      })}
    </ul>
  </>
);
