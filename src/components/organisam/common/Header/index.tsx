import React from "react";
import { Container, LocationText, Logout, MainHeader, PageLocation } from "./style";
import {AiOutlineHome,AiOutlinePoweroff} from 'react-icons/ai';
import {MdKeyboardArrowRight} from 'react-icons/md';
import { useAppDispatch } from "../../../../store/hook";
import { setUser } from "../../../../slices/auth/authSlice";
import { useNavigate } from "react-router-dom";


interface IHeaderProps {}

const Header = ({}: IHeaderProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const logoutHandle = (e:any) => { 
        e.preventDefault(); 

        localStorage.removeItem("token");
        dispatch(setUser({ token: ""}));
        navigate("/login");
        
    };

    return (
        <MainHeader>
            <Container> 
                <PageLocation>
                    <AiOutlineHome 
                        size={18}
                        style={{marginRight:'10px',color:'#8493a5'}}
                    />
                    <LocationText style={{color:'#8493a5'}}>Home</LocationText>
                    <MdKeyboardArrowRight 
                        size={20}
                        color='#8493a5'
                    />
                    <LocationText style={{color:'#8493a5'}}>Pages</LocationText>
                    <MdKeyboardArrowRight 
                        size={20}
                        color='#8493a5'
                    />
                    <LocationText>Create page</LocationText>

                </PageLocation>

                <Logout onClick={(e)=>{logoutHandle(e)}}>
                    <LocationText
                        style={{marginRight:'10px'}}
                    >Log out</LocationText>
                    <AiOutlinePoweroff 
                        size={20}
                    />
                </Logout>
                
            </Container>
        </MainHeader>
    );
}

export default Header;