import PropTypes from 'prop-types';

const ProtoUserAddress = PropTypes.shape({
  city: PropTypes.string.isRequired,
});

const ProtoUser = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: ProtoUserAddress.isRequired,
});

export const ProtoPost = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: ProtoUser.isRequired,
    commentList: PropTypes.arrayOf().isRequired,
  }).isRequired,
};
