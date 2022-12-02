import styled from "styled-components";



export const SnackBar = styled.div`
    position:fixed;
    bottom:30px;
    left:30px;
    width:450px;
    height:50px;
    
    // border: 1px solid #dee2e6;
    // box-shadow: 0 1px 2px 0 rgb(31 45 61 / 7%);
    z-index:9999;
    background-color:#d32f2f;
    border-radius:5px;
    display:flex;
    align-items:center;
`;

export const InsideSnackBar = styled.div`
    padding-left:20px;
    padding-right:20px;
    display:flex;
    align-items:center;
    width:100%;
`;

export const SnackBarMessage = styled.span`
    font-size:14px;
    margin-left:10px;
    color:white;
    display:flex;
    flex:1; 
`;

export const CloseSnackBar = styled.button`
    outline:none;
    border:none;
    background-color:transparent;
    cursor:pointer;
    border-radius:50%;
    width:30px;
    height:30px;
    display:flex;
    align-items:center;
    justify-content:center;

    &&:hover{
        background-color: rgb(255, 255, 255, 0.1);
    }
`;