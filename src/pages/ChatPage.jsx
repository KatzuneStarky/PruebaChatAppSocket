import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
    const [chats, setChats] = useState([]);

    useEffect(() => {
        axios.get("/api/chat").then(res => {
            setChats(res.data)
        }).catch(err => console.log(err))
    }, []);

    return (
        <div>
            {
                chats.map(d => (
                    <div key={d._id}>{d.chatName}</div>
                ))
            }
        </div>
    );
};

export default ChatPage;
