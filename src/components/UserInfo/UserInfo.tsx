type Props = {
  name: string,
  email: string,
};

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <>
    <h2>User info:</h2>
    <p>
      <b>User name: </b>
      {name}
    </p>
    <p>
      <b>User email: </b>
      {email}
    </p>
  </>
);
