import React from "react";
import { Navigate } from "react-router-dom";
import s from './Contacts.module.css';
import { useEffect } from "react";
import ChangeModal from "../../Modal/ChangeModal";
import { useState } from "react";
import ChangeContact from "../ModalComponents/ChangeContact";

function Contacts ({isAuth, isChanged, contacts, user, getContactsThunk, deleteContact, updateContactsThunk, changeContact, setFlagData }) {

    const [contact, setContact] = useState({})
    const [isOpen, setIsOpen] = useState(false)
    const [count, setCount] = useState(0)

    // const i = 0;


    useEffect(()=>{
        if (isAuth) return getContactsThunk(user.id);
    },[isChanged])

    // useEffect(()=>{
    //     updateContactsThunk(user)
    // },[user])

    useEffect(()=>{
        updateContactsThunk(user)
    },[count])

    let openModal = (contact) =>{
        setContact(contact)
        setIsOpen(!isOpen)
        console.log(contact);
    }

    const closeModal = () =>{
        setIsOpen(!isOpen)
    }

    if (!isAuth) return <Navigate to={"/"} />;

    const deleteContactButton = async (id, user) => {
        await deleteContact(id);
        setCount((prev) => ++prev)
        console.log(count);
        // updateContactsThunk(user);
        // setFlagData(!isChanged)

    }

    const changeContactButton = (contact) => {
        // contacts.map((e)=> e = e.id==contact.id?contact:e) 
        changeContact(contacts);
        setCount((prev) => ++prev)

    }

    // var promise = new Promise(function(resolve, reject) {
    //     resolve(changeContactButton)
    // })
    // promise.then(function(){
    //     updateContactsThunk(user);
    //     console.log('change work');
    // })

    // async function changeAsync(contact) {
    //     try{
    //         console.log('change async');
    //         await changeContactButton(contact);
    //         console.log('change async 2');
    //         await updateContactsThunk(user);
    //         console.log('change async 3');

    //     }
    //     catch{}
    // }


    const contactsElements = contacts.map( (c, id) =>
        <div key={c.id} className={s.contact}>
        <div>
            <img src={c.photo} alt='ava' className={s.img}/>
        </div>
        <div className={s.content}>
            <div>
                <h1 >Name: {c.name}</h1>
            </div>
            <div>
                <h2>Lastname: {c.lastname}</h2>
            </div>
            <div>
                <p>Age: {c.age}</p>
            </div>
            <div>
                <p>Phone: {c.number}</p>
            </div>
        </div>
        <div className={s.buttons}>
            <div className={s.buttonWrap}>
                <button onClick={()=> openModal(c)} className={s.button}>Edit</button>
            </div>
            <div className={s.buttonWrap}>
                <button onClick={() => deleteContactButton(id, user)} className={s.button}>Delete</button>
            </div>
        </div>
    </div>
    
   )

    return(
        <div className={s.contacts} >
            {contactsElements}
            <ChangeModal title='Change contact' isOpened={isOpen} onModalClose={()=> closeModal()}
             contact={contact} onSubmit={(cnt)=>changeContactButton(cnt)}/>
        </div>
    )
}
export default Contacts;