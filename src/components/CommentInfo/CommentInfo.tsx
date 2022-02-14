type Props = {
  name: string,
  body: string,
  email: string,
};

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => (
  <>
    <h3>Comment info:</h3>
    <p>
      <b>Comment title: </b>
      {name}
    </p>
    <p>
      <b>Comment description: </b>
      {body}
    </p>
    <p>
      <b>User email: </b>
      {email}
    </p>
  </>
);
