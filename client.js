const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect',()=>{
    console.log('Successfully connected to game server');
    conn.write('Name: HY');
    /*setTimeout(function() {
      conn.write('Move: up');
    },1000);
    setTimeout(function() {
      conn.write('Move: left');
    },500); */

    
  });
  conn.on('data',(message)=>{
    console.log(`server says :${message}`);
    
  });
  
  return conn;
};

module.exports = {connect};