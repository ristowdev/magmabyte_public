
import styled from "styled-components";

export const InsideEditSection = styled.div`
    padding:30px;
`;


export const UploadFileINput = styled.input`
    border: 1px solid #e5e5e5;
    
    &::file-selector-button {
        background-color: #fff;
        color: #000;
        border: 0px;
        border-right: 1px solid #e5e5e5;
        padding: 13px 15px;
        margin-right: 20px;
        transition: .5s;
    }
  
    &::file-selector-button:hover {
        background-color: #eee;
        border: 0px;
        border-right: 1px solid #e5e5e5;
    }

    border-radius:0.25rem;

    &.i-4df-felf{
        border:1px solid red;
    }
`;