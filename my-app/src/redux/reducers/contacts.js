import { contactsAPI } from "../../api/api";

const SET_CONTACTS_DATA = 'SET_CONTACTS_DATA';
const SET_FLAG_DATA = 'SET_FLAG_DATA';


export const setContactsData = (message) => ({
    type: 'SET_CONTACTS_DATA',
    contacts: message
});

export const setFlagData = (flag) =>({
    type: 'SET_FLAG_DATA',
    flag: flag 
})

const initialState =  {
    contacts:[],
    isChanged: false,
};

export const contacts = (state = initialState, action) => {
    switch (action.type){
            case SET_CONTACTS_DATA:
            return {
                ...state,
                contacts: action.contacts,
            };
            case SET_FLAG_DATA:
                return{
                    ...state,
                    isChanged: action.flag,
                }
        default:
            return {
                ...state
            };
    }
}


export const getContactsThunk = (id) => {
    return( dispath ) =>{
        contactsAPI.getContacts(id).then( response => {
            dispath(setContactsData(response.contacts))
        })
    }
}
