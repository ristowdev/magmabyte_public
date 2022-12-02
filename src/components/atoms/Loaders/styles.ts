import styled from "styled-components";

export const CircularProgresAnimation = styled.div`
    border: 2px solid #ffffff33;
    border-radius: 50%;
    border-top: 2px solid white;
    width: 15px;
    height: 15px;
    -webkit-animation: spin 0.5s linear infinite; /* Safari */
    animation: spin 0.5s linear infinite;

    &@-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
      }
      
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
`;