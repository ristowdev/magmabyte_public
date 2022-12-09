import styled from "styled-components";

export const Component = styled.div`
    width:100%;
    box-shadow: 0 1px 2px 0 rgb(31 45 61 / 7%);
    min-height:50px;
    background-color:white;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    margin-top:4rem;
`;

export const SideBarComponent = styled.div`
    width:100%;
    min-height:50px;
    position: relative;
    display: flex;
    // flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    // border-radius: 0.25rem;
    margin-top:4rem;
    display:flex;
    margin-bottom:5rem;
`;

export const MainLeft = styled.div`
    width:75%;
    min-height:150px;
    box-shadow: 0 1px 2px 0 rgb(31 45 61 / 7%);
    background-color:white;
    border: 1px solid #dee2e6;
`;

export const SideBarRight = styled.div`
    width:25%;
    // min-height:300px;
    // box-shadow: 0 1px 2px 0 rgb(31 45 61 / 7%);
    // background-color:white;
    // border: 1px solid #dee2e6;
    margin-left:2%;
    // border-radius: 0.25rem;
    height: fit-content !important;
`;

export const ActionButtons = styled.div`
    display:flex;
    border-top: 1px solid #dee2e6;
    justify-content:space-between;
    padding:20px;
`;