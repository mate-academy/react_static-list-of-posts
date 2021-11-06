import { Comment } from '../types';

export type Props = {
  comm: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comm }) => {
  const { name, email, body } = comm;

  return (
    <div className="commentInfo">
      <div>
        <img
          className="commentInfo__avatar"
          src="https://i.pinimg.com/564x/5f/8c/8b/5f8c8baac6245d7ee4087753bdedc113.jpg"
          alt=""
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
