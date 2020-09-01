import React from 'react';
import { UserShape } from '../Shape';

export const User = ({ name, email, address }) => (
  <section className="userInfo">
    <p>
      <strong>
        {`Post by ${name}`}
      </strong>
    </p>
    <p>{`Email: ${email}`}</p>
    <p>{`City: ${address.city}`}</p>
  </section>
);

User.propTypes = UserShape;
