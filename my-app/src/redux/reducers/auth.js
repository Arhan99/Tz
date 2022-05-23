import { userAPI } from "../../api/api";
import { contactsAPI } from "../../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const LOGOUT = "LOGOUT";

const ADD_CONTACT = "ADD_CONTACT";
const CHANGE_CONTACT = "CHANGE_CONTACT";
const DELETE_CONTACT = "DELETE_CONTACT";

export const setUserData = (user) => ({
  type: "SET_USER_DATA",
  data: user,
});
export const logout = () => {
  return { type: "LOGOUT" };
};

export const addContact = (message) => ({
  type: "ADD_CONTACT",
  contact: message,
});

export const changeContact = (message) => ({
  type: "CHANGE_CONTACT",
  contacts: message,
});

export const deleteContact = (message) => ({
  type: "DELETE_CONTACT",
  index: message,
});

const initialState = {
  user: {
    userId: null,
    login: null,
    password: null,
    contacts: null,
  },
  isAuth: false,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        user: action.data,
        isAuth: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuth: false,
      };
    case ADD_CONTACT:
      return {
        ...state,
        user: {
          ...state.user,
          contacts: [...state.user.contacts, action.contact],
        },
      };
    case CHANGE_CONTACT:
      if (!!action.contacts)
        return {
          ...state,
          user: {
            ...state.user,
            contacts: [
              ...state.user.contacts.map((c) => {
                for (let i = 0; i < action.contacts.length; i++) {
                  if (action.contacts[i].id === c.id) return action.contacts[i];
                }
                return c;
              }),
            ],
          },
        };
      return {
        ...state,
      };
    case DELETE_CONTACT:
      console.log(action.index);
      return {
        ...state,
        user: {
          ...state.user,
          contacts: [
            ...state.user.contacts.slice(0, action.index),
            ...state.user.contacts.slice(action.index + 1),
          ],
          // contacts: [...state.user.contacts.slice(0, action.index).concat(...state.user.contacts.slice(action.index + 1))]
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export const getUserThunk = (login, password) => {
  return (dispath) => {
    userAPI.getUser(login, password).then((response) => {
      dispath(setUserData(response[0]));
    });
  };
};

export const updateContactsThunk = (user) => {
  return (dispath) => {
    contactsAPI.updateContacts(user);
  };
};
