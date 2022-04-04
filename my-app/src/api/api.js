import * as axios from "axios";

let url = 'http://localhost:4200/'

const user = axios.create({baseURL: url + 'users'});


export const userAPI = {
    getUser: (login = null, password = null) =>{
        return user.get(``, {
            params: {
                login: login,
                password: password
            }
        }, {
            headers: {
                'Access-Control-Allow-Origin' : '*'
            }
        } )
        .then(response => response.data)
    },
}

export const contactsAPI = {
    getContacts: (id = null) =>{
        return user.get(`/${id}`, {}, {
            headers: {
                'Access-Control-Allow-Origin' : '*'
            }
        } )
        .then(response => response.data)
    },
    updateContacts: (userData) =>{
        return user.put(`/${userData.id}`, userData)
        .then(response => response.data)
    },
}
