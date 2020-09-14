import React, {useEffect, useState} from "react";
import {Avatar} from "@material-ui/core";
import db from "./firebase";
import {useParams, Link} from "react-router-dom";

function SidebarChat({addNewChat, id, name}) {
  const [messages, setMessages] = useState('');
  const createChat = () => {
    const roomName = prompt("Please enter name for chat room");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      })
    }
  };

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
          setMessages(snapshot.docs.map(doc => doc.data()))
        });
    }
  }, [id]);

  return !addNewChat ? (
    <Link to={`/rooms/${id}`} className="sidebar__link">
      <div className="sidebar-chat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${id}.svg`}/>
        <div className="sidebar-chat__info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>

  ) : (
    <div className="sidebar-chat" onClick={createChat}>
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
