import React from "react";
import {useEffect, useState} from 'react';
import UserData from "./UseData";
import OnLoadingUserData from "./LoadingPersonsData";
import * as axios from "axios";

function Table() {

    const DataLoading =  OnLoadingUserData(UserData);
  
    const [appState, setAppState] = useState(
      {
        loading: false,
        persons: null,
      }
    )
  
   useEffect(() => {
      setAppState({loading: true})
    //   const localUrl = 'http://localhost:4200/users/'
      const apiUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
      axios.get(apiUrl).then((resp) => {
        const allPersons = resp.data;
        setAppState({
        loading: false,
        persons: allPersons
         });
      });
    }, [setAppState]);
  
  
    return (
      <div className="app">
          <DataLoading isLoading={appState.loading} persons={appState.persons} />
      </div>
    );
  }
  
  export default Table;