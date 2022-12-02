import styled from "styled-components";

export const MainSideBar = styled.div`
    position: fixed;
    top: 0;
    border-right: 1px solid #dee2e6;
    box-shadow: 0 0.125rem 0.25rem rgb(31 45 61 / 4%);
    left: 0;
    bottom: 0;
    z-index: 1031;
    display: flex;
    width: 250px;
    flex-direction: column;
    background-color:white;
`;


export const LogoField = styled.div`
    // margin-bottom:0.5rem;
    width:100%;
    display:flex;
    align-items:center;
`;

export const Logo = styled.img`
    width:40px;
    height:40px;
    object-fit:cover;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-left:-10px;
`;

export const LogoText = styled.h1`
    font-size:24px;
    color: #071e55;
    font-family: Nunito,sans-serif;
    font-weight:800;
`;


export const InsideSideBar = styled.div` 
    padding-top:1rem;
    padding-left:1.643rem;
    padding-right:1.643rem;
`;


export const List = styled.div`  
    margin-top:3rem;
`;


export const ListItem = styled.div`  
    display:flex;
    align-items:center;
    // margin-bottom:1.6rem;
    width:100%;
`;


export const ListItemText = styled.span`  
    color:#8493A5;
    font-size:14.4px;
    display:flex;
    flex:1;
`;

export const ListItemAndSubItems = styled.div`
    display:flex;
    width:100%;
    margin-bottom:1.6rem;
    flex-direction:column;
`;


export const SubList = styled.div`  
    margin-top:1rem;
    padding-left:2rem;  
`;


export const SubListItem = styled.div`  
    display:flex;
    align-items:center;
    width:100%;
    margin-bottom:1rem;
    &: last-child {
        margin-bottom:0;
    }
`;
 


export const SubListItemText = styled.span`  
    color:#8493A5;
    font-size:14.4px;

`;
