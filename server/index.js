const { Client, PrivateKey, AccountCreateTransaction, AccountBalanceQuery, Hbar, ConsensusTopicCreateTransaction, ConsensusMessageSubmitTransaction} = require("@hashgraph/sdk");
require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    });

    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
    });
});

server.listen(3001, () => {
    console.log("Server running on Port 3001");
});

async function main() {

    const myClient = Client.forTestnet();
    myClient.setOperator(process.env.ACCOUNT_ID, process.env.PRIVATE_KEY);

    const transactionId = await new ConsensusTopicCreateTransaction().execute(myClient);
    const transactionReceipt = await transactionId.getReceipt(myClient);
    const topicId = transactionReceipt.getConsensusTopicId();

    console.log("Topic ID is: ", topicId);

    for(var i=0; i<10; i++){
        var hcsMessage = await new ConsensusMessageSubmitTransaction().setTopicId(topicId).setMessage(`Hello, HCS! from Message $ {i}`).execute(myClient);
        var hcsMessageReceipt = await hcsMessage.getReceipt(myClient);

        console.log(`Sent message ${i}: ${hcsMessageReceipt.toString()}`);
    }
}
main();
