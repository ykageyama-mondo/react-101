import {useRef, useState, useEffect, useCallback} from 'react'

export interface Message {
  id: number,
  content: string
}

export const useWebsocket = () => {
  const ws = useRef<WebSocket>()
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:8080')

    ws.current?.addEventListener('message', ({data}) => {
      const parsed = JSON.parse(data)
      if (Array.isArray(parsed)) {
        setMessages((m) => [...m, ...parsed])
      } else {
        setMessages((m) => [...m, parsed])
      }
    })

    return () => ws.current?.close()
  }, [])

  const sendMessage = useCallback((message: string | Object) => {
    const data = typeof message === 'object' ? JSON.stringify(message) : message
    ws.current?.send(data)
  }, [])

  return {messages, sendMessage}
}
