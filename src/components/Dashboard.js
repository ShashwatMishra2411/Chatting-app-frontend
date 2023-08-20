import React from 'react'
import Sidebar from './Sidebar'
import '../App.css'
import ContactProvider from '../contexts/createContact'
import Convoprovider from '../contexts/createConvo'

export default function Dashboard(prop) {
  let id = prop.id
  // console.log(id)
  return (
    
    <ContactProvider>
      <Convoprovider>
    <div className="dashboard">
    <Sidebar id = {id}></Sidebar>
    </div>
    </Convoprovider>
    </ContactProvider>
    
  )
}
