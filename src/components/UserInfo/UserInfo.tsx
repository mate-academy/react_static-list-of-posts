import React from 'react';

import './UserInfo.scss';

interface User {
  name: string | undefined,
  email: string | undefined,
}

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <>
    <div className="contact">
      <div>
        {`Author: ${name}`}
      </div>
      <div className="contact__email">
        {`Contact: ${email}`}
      </div>
    </div>
  </>
);
