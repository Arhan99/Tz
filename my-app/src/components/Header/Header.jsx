import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import { useState } from "react";
import AddModal from "../../Modal/AddModal";
import { useEffect } from "react";
// Ща погоди 20 мин, отошёл ок()
function Header ({user, isAuth, isChanged, logout, addContact, updateContactsThunk, setFlagData, contacts}) {

    // useEffect(()=>{
    //     updateContactsThunk(user)
    //     console.log('fe')
    // },[contacts])

    const [isOpen, setIsOpen] = useState(false)
    const [count, setCount] = useState(0)

    useEffect(()=>{
        updateContactsThunk(user)
    },[count])


    let openModal = () =>{
        setIsOpen(!isOpen);
        console.log('broo');
    }

    const closeModal = () =>{
        setIsOpen(!isOpen)
    }

    const AddContactButton = (contact) => {
        addContact(contact);
        setCount((prev) => ++prev)
        console.log(count)
        // updateContactsThunk(user);
        // setFlagData(!isChanged)
    
    }

    // var promise = new Promise(function(resolve, reject) {
    //     resolve(AddContactButton)
    // })
    // promise.then(function(){
    //     updateContactsThunk(user);
    //     console.log('adddd work');
    // })

    // async function aaddContact(contact) {
    //     try{
    //         console.log('добавить контакт');
    //         await addContact(contact);
    //         console.log('обновить страницу');
    //          updateContactsThunk(user);
    //         return true;
    //     }
    //     catch(err){
    //         console.log(err.toString());
    //         return false
    //     }
    // }
    


    const onLogoutClick = () => {
         logout();
    }
    return(
        <div>
            <div className={s.logo}>
                <NavLink to="/">
                    <span className={s.use}>My</span>-<span className={s.web}>Project</span>.ru
                </NavLink>
            </div>
            <div className={s.topMenu}>
                <ul>
                    { !isAuth ? <li><NavLink to="/">Login</NavLink></li>
                    : <li><NavLink to="/">
                        <button onClick={() => onLogoutClick()} className={s.button}>Logout</button>
                        </NavLink></li>
                    }
                    <li><NavLink to="/contacts">Contacts</NavLink></li>
                    { isAuth && <li>
                        <a className={s.buttonAdd} onClick={() => openModal()} className={s.button}>Add</a>
                        </li>}
                </ul>
                   {isAuth && <h2 className={s.welcome}>{'Welcome, ' +  user.login}</h2>}
            </div>
            <AddModal onSubmit={(contact) => AddContactButton(contact)} title='Add contact' isOpened={isOpen} onModalClose={()=> closeModal()} />
        </div>
    )
}

export default Header;