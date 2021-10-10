import React from 'react';
import './UserInfo.scss';

type Props = {
  username: string;
  website: string;
  phone: string;
  email: string;
};

export const UserInfo: React.FC<Props> = (({
  username,
  website,
  phone,
  email,
}) => (
  <div className="post__author author">
    <h2 className="author__title">Author</h2>
    <div className="author__content content">
      <div className="content__image image" />
      <div className="content__info info">
        <div className="info__basic">
          <p className="info__basics--username">
            {username}
          </p>
          <a
            href="hildegard.org"
            className="info__basics--website"
          >
            {website}
          </a>
        </div>
        <div className="info__contacts contacts">
          <div
            className="contacts__icon contacts__icon--phone"
            title={phone}
          />
          <a
            href={`mailto: ${email}`}
            title={email}
            className="contacts__icon contacts__icon--mail"
          >
            <img
              src=""
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  </div>
));
