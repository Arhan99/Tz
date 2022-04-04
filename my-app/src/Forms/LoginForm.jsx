import React, {useEffect} from "react";
import s from '../components/Auth/Auth.module.css'
import {useFormik} from "formik";
import * as Yup from 'yup';
import { Navigate } from "react-router-dom";

export const LoginForm = ({getUserThunk, isAuth}) => {
    const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
        initialValues:{
            login: '',
            password: '',
        },
        validationSchema: Yup.object({
            login: Yup.string().max(10, 'Логин должен быть не длиннее 10 символов').required('Вы не ввели логин'),
            password: Yup.string().min(6, 'Минимальный размер пароля 6 символов').required('Вы не ввели пароль')
        }),
        onSubmit: ({login, password}) => {
            getUserThunk(login, password )
            
        }
    })

    if (isAuth) return <Navigate to={"/contacts"} />;
   
    return(
       
        <form onSubmit={handleSubmit}>
            <div className={s.wrap}>
                <div className={s.login}>
                    <div className={s.label}>
                        <label htmlFor="login">Логин:</label>
                    </div>
                    <input
                        className={s.input}
                        value={values.login}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="login"
                        name="login"
                        type="text"
                        placeholder="Введите логин"
                    />
                </div>
                {touched.login && errors.login ? (
                    <div>{errors.login}</div>
                ) : null}
               <div className={s.password}>
                   <div className={s.label}>
                       <label htmlFor="password">Пароль:</label>
                   </div>
                   <input
                       className={s.input}
                       value={values.password}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       id="password"
                       name="password"
                       type="password"
                       placeholder="Введите пароль"
                   />
               </div>
                {touched.password && errors.password ? (
                    <div>{errors.password}</div>
                ) : null}
            </div>
            <button className={s.submit} type="submit">Log in</button>
        </form>
    )

}