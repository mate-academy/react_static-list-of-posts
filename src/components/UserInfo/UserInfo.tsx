interface Props {
  user: User;
}

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return (
    <div className="post__user">
      <div>{`Name: ${name}`}</div>
      <div>{`Email: ${email}`}</div>
    </div>
  );
};
