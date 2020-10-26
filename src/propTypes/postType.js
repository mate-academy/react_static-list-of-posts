import PropTypes from 'prop-types';

import { userType } from './userType';
import { commentType } from './commentType';

export const postType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: userType.isRequired,
  comments: PropTypes.arrayOf(commentType).isRequired,
});
