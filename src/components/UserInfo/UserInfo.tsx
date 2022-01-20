type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user: { name, email } }) => (
  <div className="
    is-flex is-justify-content-space-between
    is-size-4
    has-text-weight-medium"
  >
    <a href="#user" className="subtitle">
      {`User: ${name}`}
    </a>
    <a href="#email" className="subtitle">
      {`Email: ${email}`}
    </a>
  </div>
);
