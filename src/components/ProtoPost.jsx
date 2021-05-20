import PropTypes from 'prop-types';

const ProtoUserAddress = PropTypes.shape({
  city: PropTypes.string.isRequired,
});

export const ProtoUserInfo = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: ProtoUserAddress.isRequired,
};

export const ProtoUser = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: ProtoUserAddress.isRequired,
  }).isRequired,
};

export const ProtoPost = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: ProtoUserInfo.isRequired,
    commentList: PropTypes.arrayOf(PropTypes.shape).isRequired,
  }).isRequired,
};
