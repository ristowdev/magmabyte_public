import React from "react";
import { Container, LocationText, Logout, MainHeader, PageLocation } from "./style";
import {AiOutlineHome,AiOutlinePoweroff} from 'react-icons/ai';
import {MdKeyboardArrowRight} from 'react-icons/md';


interface IHeaderProps {}

const Header = ({}: IHeaderProps) => {
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

                <Logout>
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