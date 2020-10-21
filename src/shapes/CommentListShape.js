import PropTypes from 'prop-types';

import { CommentShape } from './CommentShape';

export const CommentListShape = PropTypes.shape({
  comments: PropTypes.objectOf(CommentShape).isRequired,
}).isRequired;
