const mongoose = require("mongoose");
const Chat = require("./models/chats.js");

main().then(() => {
    console.log('Connection established...');
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

Chat.insertMany([
    {
        from: "Chetan",
        to: "Amol",
        message: "Hello, What are you doing?",
        created_at: new Date()
    },
    {
        from: "Amol",
        to: "Chetan",
        message: "Nothing Brother!",
        created_at: new Date()
    },
    {
        from: "Chetan",
        to: "Shrikant",
        message: "I won't to study brother",
        created_at: new Date()
    },
    {
        from: "Shrikant",
        to: "Chetan",
        message: "Okay Brother",
        created_at: new Date()
    },
    {
        from: "Shubhadeep",
        to: "Chetan",
        message: "Hello Everyone, WhatsApp!!",
        created_at: new Date()
    }
]).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});