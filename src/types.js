import PropTypes from 'prop-types';

const string = PropTypes.string.isRequired;

export const TypeComment = {
  opinion: PropTypes.shape({
    body: string,
    name: string,
    email: string,
  }).isRequired,
};

export const TypeCommentList = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export const TypeUser = {
  user: PropTypes.shape({
    address: PropTypes.shape({
      city: string,
    }),
    name: string,
    email: string,
  }).isRequired,
};

export const TypePost = {
  article: PropTypes.shape({
    body: string,
    title: string,
    user: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
  }).isRequired,
};
