import { style } from "@mui/system";
import styled from "styled-components";

export const BackDrop = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
`;

export const ModalInside = styled.div`
    width:600px;
    background-color:white;
    border-radius:0.25em;
`;


export const ModalHeader = styled.div`
    display:flex;
    width:100%;
    border-bottom: 1px solid #dee2e6;

`;

export const HeaderInside = styled.div`
    padding:15px;
    padding-left:20px;
    padding-right:20px;
    display:flex;
    width:100%;
    align-items:center;
`;

export const HeaderText = styled.span`
    font-size:15px;
    display:flex;
    flex:1;
`;

export const ExiteButton = styled.div`
    cursor:pointer;
    width:30px;
    height:30px;
    background-color:#e7e7e7;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
`;


export const ModalContent = styled.div`

    display:flex;
    flex-direction:column;
`;
export const Container = styled.div`
    display:flex;
    padding:20px;
    padding-top:0px;
    padding-bottom:10px;
`;
export const PageComponentsList = styled.div`
    width:100%;
        
    display:flex;
    flex-direction:column;
`;

export const SingleComponentList = styled.div`
    height:50px;
    display:flex;
    align-items:center;
    width:100%;
    
    border-bottom: 1px solid #dee2e6;
    cursor:pointer;
`;

export const ComponentName = styled.span`
    font-size:14px;
    color:#6d6d6d;
`;

export const Dtext = styled.p`
    text-align:left;
    font-size:15px;
    color:#727272;
`;
export const DeleteAsk = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    min-height:110px;
    flex-direction:column;
`;  

export const Buttons = styled.div`
    display:flex;
    align-items:center;
    margin-top:5px;
    margin-bottom:5px;
    justify-content:flex-end;
`;  