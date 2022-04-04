import { getUserThunk } from '../../redux/reducers/auth';
import { connect } from 'react-redux'
import { compose } from 'redux';
import Auth from './Auth';

let mapStateToProps = ( state ) => {
  return {user: state.auth.user, isAuth: state.auth.isAuth}
}

export default compose(connect(mapStateToProps, {getUserThunk}))(Auth)
