const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the "public" folder
app.use(express.static('public'));

// Define the port
const PORT = process.env.PORT || 3000;

// Handle player connections
io.on('connection', (socket) => {
  console.log('A player connected');
  
  socket.on('disconnect', () => {
    console.log('A player disconnected');
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
