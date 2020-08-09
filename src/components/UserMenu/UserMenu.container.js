import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import UserMenu from './UserMenu';
import defaultAvatar from './defaultAvatar.png';

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
