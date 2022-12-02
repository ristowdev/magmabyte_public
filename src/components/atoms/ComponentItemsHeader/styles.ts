import styled from "styled-components";


export const ComponentWithItmes = styled.div`
    width:100%;
    display:flex;

    display: flex;
    flex-direction: column;
    
`;

export const ComponetWithItemsHeader = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    height:50px;
    cursor:pointer;
    padding-left:20px;
    padding-right:20px;
    outline:none;
    border:none;
    background-color:white;
    box-shadow: 0 1px 2px 0 rgb(31 45 61 / 7%);
    margin-bottom:20px;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
`;

export const CWIHText = styled.span`
    font-size:13px;
    font-weight:bold; 
`;

export const CWIHBox = styled.div`
    display:flex;
    flex:1;
    align-items:center;
`; 



export const Container = styled.div`
    padding:20px;
    display:flex;
    flex-direciton:column;
    width:100%; 
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;



export const Actions = styled.div`
    display:flex;
    align-items:center;
`;

export const DeleteActionButton = styled.div`
    width:30px;
    height:30px;
    background-color:#ffecec;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    margin-left:15px;
`;