type Props = {
  name: string,
  email: string,
};

export const UserInfo: React.FC<Props> = ({ name, email }) => (
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
