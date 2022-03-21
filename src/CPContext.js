import React from 'react'
import { createContext,useContext,useState,useEffect } from 'react'


const Crypto=createContext()

const CPContext = ({children}) => {
    const [currency, setCurrency] = useState("USD")
    const [symbol, setSymbol] = useState("$")

    useEffect(() => {
      if (currency==="eur") setSymbol("€")
      else if(currency==="usd") setSymbol("$")
    }, [currency])
    return <Crypto.Provider value={{currency,symbol,setCurrency}}>{children}</Crypto.Provider>
    
}

export default CPContext;


export const CPState=()=>{
  return  useContext(Crypto)
}