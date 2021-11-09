import { Comment } from '../types';

export type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <div className="commentInfo">
      <div>
        <img
          className="commentInfo__avatar"
          src="https://i.pinimg.com/564x/5f/8c/8b/5f8c8baac6245d7ee4087753bdedc113.jpg"
          alt="avatar of the user"
        />
        <div className="commentInfo__email">
          user email:
          <br />
          {email}
        </div>
      </div>

      <div>
        <h3 className="commentInfo__title">{name}</h3>
        <p className="commentInfo__body">{body}</p>
      </div>
    </div>
  );
};
