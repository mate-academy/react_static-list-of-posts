type Props = {
  name: string,
  email: string,
};

export const UserInfo: React.FC<Props> = ({ email, name }) => (
  <div>
    <p>
      <strong>
        Email:
        {' '}
      </strong>
      {email}
    </p>

    <p>
      <strong>
        Name:
        {' '}
      </strong>
      {name}
    </p>

  </div>
);
