import styled from "styled-components";

export const ControlInput = styled.div`
    display:flex;
    flex-direction:column;
`;

export const Input = styled.input`
    width:100%;

    &&.i-4df-felf{
        border:1px solid red;
        ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: red;
        }
        ::-moz-placeholder { /* Firefox 19+ */
        color: red;
        }
        :-ms-input-placeholder { /* IE 10+ */
        color: red;
        }
        :-moz-placeholder { /* Firefox 18- */
        color: red;
        }
    }
    

`;

export const InputContainer = styled.div`
    display:flex;
`;

