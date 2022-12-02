import styled from "styled-components";

export const ContainerCenter = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:100vh;
`;

export const Form = styled.form`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:100vh;
`;


export const FormInside = styled.div`
    display:flex;
    width:450px;
    flex-direction:column;
`;


export const LogoField = styled.div`
    // margin-bottom:0.5rem;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const Logo = styled.img`
    width:55px;
    height:55px;
    object-fit:cover;
`;

export const LogoText = styled.h1`
    font-size:30px;
    color: #071e55;
    font-family: Nunito,sans-serif;
    font-weight:800;
`;

export const SubText = styled.label`
    color:black;
    font-family: Nunito,sans-serif;
    font-weight:800;
    font-size:20px;
`;

export const SubTextField = styled.label`
    height:60px;
    width:100%;
    display:flex;
    justify-content:center;
`;

export const Copywriting = styled.div`
    dispaly:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    margin-top:15px
`;

export const TextCopywriting = styled.p`
    text-align:center;
    font-size:13px;
    color:#8493A5;
`;
