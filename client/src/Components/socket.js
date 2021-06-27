const io = require("socket.io-client");

const socket = io("http://localhost:5000")

export function sendMessage(phone, message) {
    socket.emit('message', {
        message, 
        phone
    })
}