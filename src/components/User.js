import React from 'react';
import PropTypes from 'prop-types';
import { Feed, Icon } from 'semantic-ui-react';
import { getMessageDate } from './getMessageDate';

const generateNumber = (min = 0, max = 70) => Math.floor(
  Math.random() * (max - min + 1) + min,
);

const User = ({ id, cmtsId, name, email, address }) => (
  <Feed className="user">
    <Feed.Event>
      <Feed.Content>
        <Feed.Summary className="user__summary">
          <Feed.User>{name}</Feed.User>
          <Feed.Date>
            {`added this post on ${getMessageDate(cmtsId + id)}`}
          </Feed.Date>
        </Feed.Summary>
        <p className="user__address" aria-label={email}>
          {`email: ${email}`}
        </p>
        <p className="user__address" aria-label={address.city}>
          {`city: ${address.city}`}
        </p>
        <Feed.Meta>
          <Feed.Like>
            <Icon name="like" />
            {`${generateNumber()} Likes`}
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  </Feed>
);

User.propTypes = {
  id: PropTypes.number.isRequired,
  cmtsId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string,
  }).isRequired,
};

export default User;
