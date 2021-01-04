import { Avatar, IconButton } from '@material-ui/core'
import React,{useState} from 'react'
import "./Chat.css"
// import axios from "../axios"
import {AttachFile,Mic,InsertEmoticon,MoreVert,SearchOutlined} from '@material-ui/icons';

function Chat({ messages }) {

    const [input, setInput] = useState("");

    const sendMessage = async(e) => {
        // e.preventDefault();
        // await axios.post("/message/new", {
        //     message:input,
        //     name:"Demo",
        //     timestamp:"Just now",
        //     received:false,
        // })
        // setInput("")
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src = {`https://avatars.dicebear.com/api/male/123.svg`}/>

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>last seen at ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {/* {messages.map((message) => (
                    <p className={`chat__message ${message.received && "chat__reciever"}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">{message.timestamp}</span>
                </p> */}
                ))}
            </div>

            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticon />
                </IconButton>

                <form>
                    <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Type a message"
                    type="text" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>

                <IconButton>
                    <Mic />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat