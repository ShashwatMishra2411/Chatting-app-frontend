import React,{useContext} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { useContacts } from './createContact'
const ConvoContext = React.createContext()

export function useConvo(){
    return useContext(ConvoContext)
}
export default function Convoprovider({children}) {
    const {contacts} = useContacts()
    let [conversations, setConversations] = useLocalStorage('conversations',[])
    function createConversation(recipients){
        setConversations(prev=>{
            return [...prev,{recipients, messages:[]}]
        })
    }
    const formattedConversations = conversations.map(conversation=>{
        const recipients = (conversation.recipients).map(recipient=>{
            const contact = contacts.find(contact=>{
                return contact.id === recipient
            })
            console.log("contact = "+contact)
            const name = (contact&&contact.name)||recipient
            return {id:recipient,name}
        })
        return {...conversation, recipients}
    })
    console.log(formattedConversations)
    const value = {conversations:formattedConversations,createConversation}
  return (
    <ConvoContext.Provider value={value}>
        {children}
    </ConvoContext.Provider>
  )
}
