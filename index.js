const WS = require('ws')
const port = process.env.PORT || 9000
const target = 'ws://st-chat.shas.tel'
const wss = new WS.Server({ port })

wss.on("connection", function(ws) {
  var id = setInterval(function() {
    ws.send(JSON.stringify(new Date()), function() {  })
  }, 1000)

  console.log("websocket connection open")

  ws.on("close", function() {
    console.log("websocket connection close")
    clearInterval(id)
  })
})
