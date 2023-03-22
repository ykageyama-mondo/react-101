import React, {useEffect} from 'react'
import {Topic} from '../helpers/topic'
import {useWebsocket} from '../hooks'

const Chat = () => {
  const {messages, sendMessage} = useWebsocket()

  useEffect(() => {console.log(messages)}, [messages])
  const click = () => sendMessage('dwaokdwa')
  return (
    <div className="h-[600px] flex flex-col">
      <div className='border p-5 border-4 border-slate-500 rounded-md flex-grow'>
        The chat list goes here

      </div>
      <div className='flex gap-2 pt-2'>
        <input className="flex-grow border border-slate-500 border-4 rounded-md pl-3 hover:bg-neutral-100 focus:border-none" type='text' placeholder='Type ya message'/>
        <button onClick={click} className="bg-sky-500 text-neutral-100 font-bold text-lg border border-sky-600 hover:border-sky-700 border-4 rounded-md">SEND</button>
      </div>
    </div>
  )
}

export const Walkthrough = () => {
  return (
    <Topic title="Let's create a sample app!">
      <Chat/>
    </Topic>
  )
}
