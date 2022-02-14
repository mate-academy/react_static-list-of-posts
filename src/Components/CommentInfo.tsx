type Props = {
  name: string;
  email: string;
  body: string;
};

export const CommentInfo: React.FC<Props> = ({
  name,
  email,
  body,
}) => (
  <>
    <div className="comment__author user">
      <div className="user__name">
        {`Username: ${name}`}
      </div>

      <div className="user__email">
        {`Email: ${email}`}
      </div>
    </div>

    <div className="comment__content">
      {body}
    </div>
  </>
);
