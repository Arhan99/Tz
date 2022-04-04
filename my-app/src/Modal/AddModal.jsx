import './Modal.css';
import s from '../components/Contacts/Contacts.module.css';
import { useState } from 'react';
import { useFormik } from 'formik';


function AddModal (props){


    const {handleSubmit, handleChange, values} = useFormik({
        initialValues:{
            // id: 100,
            name: '',
            lastname: '',
            age: '',
            phone: ''
        },
        onSubmit: (contact) =>{
            props.onSubmit(contact);
            console.log('Add work');
        }
    })

    return(
        <form onSubmit={handleSubmit}>
        <div className={`modal__wrapper ${props.isOpened ? 'open': 'close'}`}>
            <div className='modal__body'>
                <div className='modal__close' onClick={props.onModalClose}>x</div>
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <hr />
                <div className={s.contactWrap}>
                    <div className={s.contact}>
                        <div>
                            <img alt='ava' className={s.img}/>
                        </div>
                        <div className={s.content}>
                            <div className={s.changeStr}>
                                <h1 >Name:</h1>
                                <input onChange={handleChange} value={values.name} 
                                    id='name' name='name' type="text" placeholder='Name' />
                            </div>
                            <div className={s.changeStr}>
                                <h2>Lastname:</h2>
                                <input onChange={handleChange} value={values.lastname} 
                                    id='lastname' name='lastname' type="text" placeholder='Lastname'  />
                            </div>
                            <div className={s.changeStr}>
                                <p>Age:</p>
                                <input onChange={handleChange} value={values.age} 
                                   id='age' name='age' type="text" placeholder='Age' />
                            </div>
                            <div className={s.changeStr}>
                                <p>Phone:</p>
                                <input onChange={handleChange} value={values.phone} 
                                    id='phone' name='phone' type="text" placeholder='Phone' />
                            </div>
                        </div>
                        <div className={s.buttons}>
                            <div className={s.buttonWrap}>
                                <button type='submit'  className={s.button}>Add</button>
                            </div>
                        </div>
                    </div>
              </div>
            </div>
        </div>
    </form>
    )
}

export default AddModal;