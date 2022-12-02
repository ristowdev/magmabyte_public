import React from "react";
import Header from "../../organisam/common/Header";
import Sidebar from "../../organisam/common/SideBar";

interface ISidebarAndHeaderProps {}

const SidebarAndHeader = ({}: ISidebarAndHeaderProps) => {
    return (
        <div style={{display:'flex'}}>
            <Sidebar></Sidebar>
            <Header></Header>
        </div>
    );
}

export default SidebarAndHeader;