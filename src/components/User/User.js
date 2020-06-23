import React from 'react';
import { usersShape } from '../../api/preparedPostsShape';
import './User.css';

const User = ({ user }) => {
  const { street, suite, city, zipcode, geo } = user.address;
  const { lat, lng } = geo;

  return (
    <>
      <h3 className="card-header">{`Author: ${user.username}`}</h3>
      <h6 className="card-subtitle text-muted adress">
        {`Email: ${user.email}`}
      </h6>
      <h6 className="card-subtitle text-muted adress">
        {`City: ${city}`}
      </h6>
      <h6 className="card-subtitle text-muted adress">
        {`street: ${street}`}
      </h6>
      <h6 className="card-subtitle text-muted adress">
        {`suite: ${suite}`}
      </h6>
      <h6 className="card-subtitle text-muted adress">
        {`zipcode: ${zipcode}`}
      </h6>
      <h6 className="card-subtitle text-muted adress">
        {`suite: ${suite}`}
      </h6>
      <span className="card-subtitle text-muted">{`lat: ${lat}`}</span>
      <span className="card-subtitle text-muted">{`lng: ${lng}`}</span>
      <hr />
    </>
  );
};

User.propTypes = {
  user: usersShape.isRequired,
};

export { User };
