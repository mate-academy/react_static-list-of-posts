import PropTypes from 'prop-types';

export const userPropTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape(
    {
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }.isRequired,
  ).isRequired,
};

export const commentPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}).isRequired;

export const commentsListPropTypes = {
  comments: PropTypes.arrayOf(commentPropTypes).isRequired,
};
