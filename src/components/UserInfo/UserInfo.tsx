import React from 'react';

import './UserInfo.scss';

interface Props {
  name: string,
  email: string,
}

export const UserInfo: React.FC<Props> = ({ name, email }) => (
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
