import RegisterView from './RegisterView';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
