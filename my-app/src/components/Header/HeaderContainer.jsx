import { getUserThunk, addContact, logout, updateContactsThunk } from '../../redux/reducers/auth';
import { getContactsThunk, setFlagData } from '../../redux/reducers/contacts';
import { connect } from 'react-redux'
import { compose } from 'redux';
import Header from './Header';

let mapStateToProps = ( state ) => {
  return {user: state.auth.user, isAuth: state.auth.isAuth, isChanged: state.contacts.isChanged, contacts: state.contacts.contacts}
}

export default compose(connect(mapStateToProps, {getUserThunk, logout, addContact, setFlagData, updateContactsThunk, getContactsThunk}))(Header)
