type Props = {
  name?: string,
  email?: string,
};

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <>
    <strong>{'User name: '}</strong>
    {name}
    <p>
      <strong>{'Email: '}</strong>
      {email}
    </p>
  </>
);
