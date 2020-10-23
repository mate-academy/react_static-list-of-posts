import PropTypes from 'prop-types';
import { UserShape } from './UserShape';

export const PostShape = PropTypes.shape({
  user: UserShape.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}).isRequired;
