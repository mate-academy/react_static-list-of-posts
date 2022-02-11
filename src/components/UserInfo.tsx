import React from 'react';

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
    },
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  },
}

type Information = {
  info: User | undefined;
};

export const UserInfo: React.FC<Information> = ({ info = {} }) => {
  return (
    <div className="userInfo">
      <p>{info.name}</p>
      <a href={info.email}>{info.email}</a>
    </div>
  );
};
