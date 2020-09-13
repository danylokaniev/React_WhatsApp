import React, {useEffect, useState} from "react";
import {Avatar} from "@material-ui/core";

function SidebarChat({addNewChat}) {
  const [seed, setSeed] = useState('');
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);


  const createChat = () => {
    const roomName = prompt("Please enter name for chat");

    if (roomName) {
      // some clever stuff
    }
  };

  return !addNewChat ? (
    <div className="sidebar-chat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
      <div className="sidebar-chat__info">
        <h2>Room name</h2>
        <p>Last message</p>
      </div>
    </div>
  ) : (
    <div className="sidebar-chat" onClick={createChat}>
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
