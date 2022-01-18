type Props = {
  name: string,
  email: string,
};

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <div className="subtitle is-flex is-justify-content-space-between">
    <a href="#user">{`User: ${name}`}</a>
    <a href="#email">{`Email: ${email}`}</a>
  </div>
);
