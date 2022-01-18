type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="card-content">
    <h6 className="title is-6">{user.name}</h6>
    <a href="mailto:">{user.email}</a>
  </div>
);
