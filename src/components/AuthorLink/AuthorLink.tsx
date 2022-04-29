import { User } from '../../types/User';

import './AuthorLink.scss';

type Props = {
  user: User | null;
};

export const AuthorLink: React.FC<Props> = ({ user }) => {
  if (!user) {
    return (
      <div className="AuthorLink--anonymous">
        <span className="AuthorLink__username" data-cy="name">
          Anonymous user
        </span>
      </div>
    );
  }

  const {
    name: username,
    email,
  } = user;

  return (
    // # is not allowed, but i still want it to be a link
    <a href={`./users/${username}`} className="AuthorLink">
      <span className="AuthorLink__username" data-cy="name">
        {username}
      </span>

      <span className="AuthorLink__email" data-cy="email">
        {email}
      </span>
    </a>
  );
};
