import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import {useConvo} from '../contexts/createConvo'

export default function OpenConvo() {
    const[text, setText] = useState('')
    const {sendMessage, selectedConversation} = useConvo()
    function handleSubmit(e){
      e.preventDefault()
      sendMessage(selectedConversation.recipients.map(recipient=>recipient.id),text)
      setText('')
    }
  return (
    <div className='d-flex flex-column flex-grow-1 convobox'>
      <div className="flex-grow-1 overflow-auto">
        <div className="h-100 d-flex flex-column align-itmes-start justify-content-end px-3">
          {selectedConversation.messages.map((message,index)=>{
            return (
              <div
              key = {index}
              className="my-1 d-flex flex-column align-items-end">
                <div className='rounded px-2 py-1'>{message.text}</div>
                <div>{message.senderName}</div>
              </div>
            )
          })}
          </div>      
        </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-2">
            <InputGroup>
            <Form.Control 
            as="textarea" 
            required 
            value={text}
            onChange={e=>setText(e.target.value)}
            style={{height:"5.5vh", resize:"none"}}/>
            <Button type='submit'>Send</Button>
            </InputGroup>
        </Form.Group>
      </Form>
    </div>
  )
}
        // {/* <InputGroup.Append>
        //     <Button type='submit'>Send</Button>
        // </InputGroup.Append> */}