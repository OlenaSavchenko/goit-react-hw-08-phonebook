import { connect } from 'react-redux';
import ContactHeader from './ContactHeader';
import { authSelectors } from '../../redux/auth';
import defaultAvatar from './defaultAvatar.png';

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

export default connect(mapStateToProps)(ContactHeader);
