import './Modal.css';
import s from '../components/Contacts/Contacts.module.css';
import { useState } from 'react';


function ChangeModal (props){

    const [contact, setContact] = useState(props.contact);

    return(
        <div className={`modal__wrapper ${props.isOpened ? 'open': 'close'}`}>
            <div className='modal__body'>
                <div className='modal__close' onClick={props.onModalClose}>x</div>
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <hr />
                <div className={s.contactWrap}>
                    <div key={props.contact.id} className={s.contact}>
                        <div>
                            <img src={props.contact.photo} alt='ava' className={s.img}/>
                        </div>
                        <div className={s.content}>
                            <div className={s.changeStr}>
                                <h1 >Name:</h1>
                                <input onChange={e =>setContact(props.contact.name = e.target.value = '' ? contact.placeholder : e.target.value)}
                                    type="text" placeholder={props.contact.name} />
                            </div>
                            <div className={s.changeStr}>
                                <h2>Lastname:</h2>
                                <input onChange={e =>setContact(props.contact.lastname = e.target.value = '' ? contact.placeholder : e.target.value)}
                                    type="text" placeholder={props.contact.lastname} />
                            </div>
                            <div className={s.changeStr}>
                                <p>Age:</p>
                                <input onChange={e =>setContact(props.contact.age = e.target.value = '' ? contact.placeholder : e.target.value)}
                                    type="text" placeholder={props.contact.age} />
                            </div>
                            <div className={s.changeStr}>
                                <p>Phone:</p>
                                <input onChange={e =>setContact(props.contact.number = e.target.value = '' ? contact.placeholder : e.target.value)}
                                    type="text" placeholder={props.contact.number} />
                            </div>
                        </div>
                        <div className={s.buttons}>
                            <div className={s.buttonWrap}>
                                <button onClick={()=> props.onSubmit(contact)} className={s.button}>Edit</button>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default ChangeModal;