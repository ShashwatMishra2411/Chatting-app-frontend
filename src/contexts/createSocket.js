import React,{useEffect, useState, useContext} from 'react'
import io from 'socket.io-client'

const SocketContext = React.createContext()

export function useSocket(){
    return useContext(SocketContext)
}

export default function SocketProvider({id, children}) {
    const [socket, setsocket] = useState()
    useEffect(() =>{
        const newSocket = io('https://chatting-app-zd1t.onrender.com',{query :{id}})
        setsocket(newSocket)
        return () => newSocket.close()
    },[id])
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}
