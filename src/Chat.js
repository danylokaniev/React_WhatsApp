import React, {useEffect, useState} from "react";
import {Avatar, IconButton,} from "@material-ui/core";
import {SearchOutlined, MoreVert, AttachFile, InsertEmoticon, Mic} from "@material-ui/icons";


function Chat() {
  const [seed, setSeed] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    setInput("");
  };


  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

        <div className="chat__header-info">
          <h3>Room name</h3>
          <p>Last seen at bla bla bla ...</p>
        </div>

        <div className="chat__header-right">
          <IconButton>
            <SearchOutlined/>
          </IconButton>

          <IconButton>
            <AttachFile/>
          </IconButton>

          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className={`chat__message ${true && "chat__receiver"}`}>
          <span className="chat__name">Sonny Saghna</span>
          Hey Guys
          <span className="chat__timestamp"> 3:52 pm</span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticon/>
        <form>
          <input
            type="text"
            placeholder="Type a message"
            value={input}
            onChange={event => setInput(event.target.value)}
          />
          <button type="submit" onClick={sendMessage}>Send a message</button>
        </form>
        <Mic/>
      </div>
    </div>
  );
}

export default Chat;
