import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ info }) => (
  <>
    <div className="user__case">
      <p className="user__desc">
        Author name:
      </p>
      <p className="user__info">
        {info.name}
      </p>
    </div>
    <div className="user__case">
      <p className="user__desc">
        E-mail:
      </p>
      <p className="user__info">
        <a
          href="mailto:someone@yoursite.com"
          className="user__mail"
        >
          {info.email}
        </a>
      </p>
    </div>
  </>
);

UserInfo.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserInfo;
