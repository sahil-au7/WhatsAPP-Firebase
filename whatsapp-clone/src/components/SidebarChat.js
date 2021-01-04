import { Avatar } from '@material-ui/core'
import React,{useEffect,useState} from 'react'
import db from '../firebase';
import "./SidebarChat.css"
function SidebarChat({id,name,addNewChat}) {

    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    const createChat = () => { 
        const roomName = prompt("Please enter nam for chat")
        if (roomName) {
            db.collection('rooms').add({
                name: roomName,
            });
        }
    }
    const avatar = `https://avatars.dicebear.com/api/male/${seed}.svg`

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={avatar} />
            <div className="sidebarChat__info">
                <h2>{name}</h2>
            <p>This message is the last message</p>
            </div>
        </div>
    ) : (
            <div onClick={createChat}
                className="sidebarChat">
                <h2>Add new Chat</h2>
                </div>
    )
}

export default SidebarChat