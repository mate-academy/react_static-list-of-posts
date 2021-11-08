export interface User {
  id?: number,
  name?: string,
  username?: string,
  email?: string,
  address?: {
    street?: string,
    suite?: string,
    city?: string,
    zipcode?: string,
    geo?: {
      lat?: string,
      lng?: string,
    },
  },
  phone?: string,
  website?: string,
  company?: {
    name?: string,
    catchPhrase?: string,
    bs?: string,
  },
}

type Props = {
  infoUser: User | undefined
};

export const UserInfo: React.FC<Props> = ({ infoUser }) => (
  <div className="user-info">
    <p className="user-info__name">
      {infoUser?.name}
    </p>
    <p className="user-info__email">
      {infoUser?.email}
    </p>
  </div>
);
