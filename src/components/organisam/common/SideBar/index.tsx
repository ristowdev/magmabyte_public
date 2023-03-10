import React from "react";
import { 
    InsideSideBar, 
    Logo, 
    LogoField, 
    LogoText, 
    MainSideBar,
    List, 
    ListItem, 
    ListItemText,
    ListItemAndSubItems,
    SubList,
    SubListItem,
    SubListItemText
} from "./style";

import LogoIcon from "../../../../media/LogoIcon.png"; 
import { HiHome } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import {MdOutlinePages} from 'react-icons/md';
import {TfiWrite} from 'react-icons/tfi';
import { Link } from "react-router-dom";
import {FaWpforms} from "react-icons/fa";
import {FiSettings,FiMenu} from "react-icons/fi";


interface ISidebarProps {}

const Sidebar = ({}: ISidebarProps) => {
    return (
        <MainSideBar>
            <InsideSideBar>

                <LogoField>
                <Logo src={LogoIcon}/>
                    <LogoText>Magmabyte</LogoText>
                </LogoField>

                <List>

                    {/* <ListItemAndSubItems>
                        <ListItem>
                            <HiHome 
                                color="#ced4da" 
                                className="icon-db" 
                                size={18}
                                style={{
                                    marginRight:'10px'
                                }}
                            />
                            <ListItemText>Dashboard</ListItemText>
                            <IoIosArrowDown 
                                color="#ced4da" 
                                size={15}
                                style={{
                                    rotate:'0deg'
                                }}
                            />
                        </ListItem>
                        <SubList>
                            <Link to='/' style={{textDecoration:'none'}}>
                                <SubListItem>
                                    <SubListItemText>Reports</SubListItemText>
                                </SubListItem>
                            </Link>
                        </SubList>
                    </ListItemAndSubItems> */}


                    <ListItemAndSubItems>
                        <ListItem>
                            <MdOutlinePages 
                                color="#ced4da" 
                                className="icon-db" 
                                size={18}
                                style={{
                                    marginRight:'10px'
                                }}
                            />
                            <ListItemText>Pages</ListItemText>
                            <IoIosArrowDown 
                                color="#ced4da" 
                                size={15}
                                style={{
                                    rotate:'0deg'
                                }}
                            />
                        </ListItem>
                        <SubList> 
                            <Link to='/pages/create' style={{textDecoration:'none'}}>
                                <SubListItem>
                                    <SubListItemText>Create new page</SubListItemText>
                                </SubListItem>
                            </Link>
                        </SubList>
                        <SubList> 
                            <Link to='/pages' style={{textDecoration:'none'}}>
                                <SubListItem>
                                    <SubListItemText>All pages</SubListItemText>
                                </SubListItem>
                            </Link>
                        </SubList>
                    </ListItemAndSubItems>


                    <ListItemAndSubItems style={{display:'flex', flex:'1'}}>
                        <ListItem>
                            <TfiWrite 
                                color="#ced4da" 
                                className="icon-db" 
                                size={18}
                                style={{
                                    marginRight:'10px'
                                }}
                            />
                            <ListItemText>Blog</ListItemText>
                            <IoIosArrowDown 
                                color="#ced4da" 
                                size={15}
                                style={{
                                    rotate:'0deg'
                                }}
                            />
                        </ListItem>
                        <SubList> 
                            <Link to='/blog/articles/create' style={{textDecoration:'none'}}>
                                <SubListItem>
                                    <SubListItemText>Create new article</SubListItemText>
                                </SubListItem>
                            </Link>
                        </SubList>
                        <SubList> 
                            <Link to='/blog/articles' style={{textDecoration:'none'}}>
                                <SubListItem>
                                    <SubListItemText>All articles</SubListItemText>
                                </SubListItem>
                            </Link>
                        </SubList>
                    </ListItemAndSubItems>


                    <br /> <br /> <br />
                    <Link to='/menu' style={{textDecoration:'none'}}>
                        <ListItemAndSubItems  >
                            <ListItem>
                                <FiMenu 
                                    color="#ced4da" 
                                    className="icon-db" 
                                    size={18}
                                    style={{
                                        marginRight:'10px'
                                    }}
                                />
                                <ListItemText>Menu</ListItemText>
                            
                            </ListItem> 
                        </ListItemAndSubItems>
                    </Link>


                    <Link to='/settings' style={{textDecoration:'none'}}>
                        <ListItemAndSubItems  >
                            <ListItem>
                                <FiSettings 
                                    color="#ced4da" 
                                    className="icon-db" 
                                    size={18}
                                    style={{
                                        marginRight:'10px'
                                    }}
                                />
                                <ListItemText>Settings</ListItemText>
                            
                            </ListItem> 
                        </ListItemAndSubItems>
                    </Link>

 

                    {/* <ListItem>
                        <MdOutlinePages 
                            color="#ced4da" 
                            className="icon-db" 
                            size={18}
                            style={{
                                marginRight:'10px'
                            }}
                        />
                        <ListItemText>Pages</ListItemText>
                        <IoIosArrowDown 
                            color="#ced4da" 
                            size={15}
                            style={{
                                rotate:'90deg'
                            }}
                        />
                    </ListItem>
                    <ListItem>
                        <TfiWrite 
                            color="#ced4da" 
                            className="icon-db" 
                            size={18}
                            style={{
                                marginRight:'10px'
                            }}
                        />
                        <ListItemText>Blog</ListItemText>
                        <IoIosArrowDown 
                            color="#ced4da" 
                            size={15}
                            style={{
                                rotate:'90deg'
                            }}
                        />
                    </ListItem> */}
                </List>

            </InsideSideBar>

        </MainSideBar>
    );
}

export default Sidebar;