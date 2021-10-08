import React from 'react';

type Props = {
  name: string;
  email: string;
};

export const UserInfo: React.FC<Props> = props => {
  const {
    name,
    email,
  } = props;

  return (
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="User avatar" />
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">{name}</p>
        <p className="subtitle is-6">{`${email}`}</p>
      </div>
    </div>
  );
};
