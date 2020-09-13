import React from "react";
import {Avatar, IconButton,} from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import {Chat, MoreVert, SearchOutlined} from '@material-ui/icons';
import SidebarChat from "./SidebarChat";


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar/>
        <div className="sidebar__header-right">
          <IconButton>
            <DonutLargeIcon/>
          </IconButton>

          <IconButton>
            <Chat/>
          </IconButton>

          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__search-container">
          <SearchOutlined/>
          <input placeholder="Search or start new chat" type="text"/>
        </div>

      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>

      </div>
    </div>
  );
}

export default Sidebar;