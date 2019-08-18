const WS = require('ws')
const port = process.env.PORT || 9000
const target = 'ws://st-chat.shas.tel'
const wss = new WS.Server({ port })

console.log("I'm working")
