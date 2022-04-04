import React from "react";
import s from './Auth.module.css'
import {LoginForm} from "../../Forms/LoginForm";
import { useEffect } from "react";

function Auth (props) {

    useEffect(()=>{
        if(!!props.user && props.user.login != null && props.user.login != undefined && props.user.password !=null && props.user.password != undefined)
        console.log(`Логин: ${props.user.login}, пароль: ${props.user.password}`);
    },[props.user])


    return(
        <div className={s.container}>
            <h1 className={s.title}>Авторизация</h1>
            <LoginForm user={props.user} getUserThunk={(login, password)=>props.getUserThunk(login, password)} isAuth = {props.isAuth} />
        </div>
    )
}

export default Auth;