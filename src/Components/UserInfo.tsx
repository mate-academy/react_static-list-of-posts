export const UserInfo: React.FC<User> = ({
  name,
  email,
}) => (
  <>
    <div>{name}</div>
    <div>{email}</div>
  </>
);
