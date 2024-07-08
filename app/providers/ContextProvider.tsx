"use client"
import React from 'react'
import { GlobalProvider } from '../context/globalProvider'


interface props {
    children: React.ReactNode
}

function ContextProvider({children}: props) {

const [isReady, setIsReady] = React.useState(false);

React.useEffect(() => {
  setTimeout(() => {
    setIsReady(true);
  },200);
}, []);

if(!isReady){
    return null;
};

  return (
    <GlobalProvider>
        {children}
    </GlobalProvider>
  )
}

export default ContextProvider