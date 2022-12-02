import styled from "styled-components";

export const SomeTable = styled.div`
    width:100%; 
`; 

export const InsideLocalTable = styled.div` 
    display:flex;
    flex-direction:column;
    width:100%;
`;

export const LocalTableHeader = styled.div` 
    display:flex;
    justify-content:space-between;
    padding-left:1.3rem;
    padding-right:1.3rem;
    padding-bottom:1rem;
    border-bottom: 1px solid #dee2e6;
`;

export const LocalTableHeaderText = styled.span`
    font-size: 12px;
    color: #8493a5;
    font-weight: 500!important;
`;


export const LocalTableHeaderItem = styled.div`

`;


export const LocalTableMain = styled.div` 
    display:flex;
    justify-content:space-between;
    padding-left:1.3rem;
    padding-right:1.3rem;
    border-bottom: 1px solid #dee2e6;
`;



export const LocalTableMainItem = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:50px;
`;

export const LocalTableMainText = styled.span`
    font-size: 13px;
    color: black;
    font-weight: 500!important;
`;