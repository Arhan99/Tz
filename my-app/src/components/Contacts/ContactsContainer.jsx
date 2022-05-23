import {
  getUserThunk,
  addContact,
  changeContact,
  deleteContact,
  updateContactsThunk,
} from "../../redux/reducers/auth";
import { connect } from "react-redux";
import { compose } from "redux";
import Contacts from "./Contacts";
import { getContactsThunk, setFlagData } from "../../redux/reducers/contacts";

let mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    isAuth: state.auth.isAuth,
    contacts: state.auth.user.contacts,
    isChanged: state.contacts.isChanged,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserThunk,
    getContactsThunk,
    addContact,
    changeContact,
    deleteContact,
    updateContactsThunk,
    setFlagData,
  })
)(Contacts);
