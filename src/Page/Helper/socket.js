const { io } = require("socket.io-client");


const socket = io("https://zwallet-ridho.herokuapp.com", { transports: ['websocket'] });


socket.onAny((event , ...args) => {
    console.log(event, args);
})


export default socket