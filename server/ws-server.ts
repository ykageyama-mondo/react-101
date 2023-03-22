import WebSocket, {WebSocketServer} from 'ws'
import { sentence } from 'txtgen';
const wss = new WebSocketServer({ port: 8080 });

interface Message {
  id: number,
  content: string
}
let idInc = 0
const messages: Message[] = []

const addMessage = (content: string) => {
  const message = {
    content,
    id: idInc
  }
  messages.push(message)
  idInc++
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  });
}

wss.on('connection', function connection(ws) {

  ws.on('message', function message(data) {
    addMessage(data.toString())
  });

  ws.send(JSON.stringify(messages));
});



setInterval(() => {
  addMessage(sentence())
}, 10000)