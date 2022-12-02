import React from 'react';
import SuccessButton from '../../../atoms/Buttons/CustomButtons';
import CustomInput from '../../../atoms/Inputs/CustomInput';
import { 
    ContainerCenter, 
    Copywriting, 
    Form, 
    FormInside,
    Logo,
    LogoField,
    LogoText,
    SubText,
    SubTextField,
    TextCopywriting
} from './style';

import LogoIcon from "../../../../media/LogoIcon.png";
import { Link } from 'react-router-dom';

interface ILoginFormProps {

}

const LoginForm = ({
}) => {
    const handleSubmit = () => {
    }
    return (
        <>
            <ContainerCenter>
                <Form>
                    <FormInside>
                        <LogoField>
                            <Logo src={LogoIcon}/>
                            <LogoText>Magmabyte</LogoText>
                        </LogoField>
                        <SubTextField>
                            <SubText>Admin panel</SubText>
                        </SubTextField>
                        
                        <CustomInput 
                            type='text' 
                            labelText='Admin email' 
                            placeholder='admin@mail.com'
                            className='login-input'
                        />

                        <CustomInput 
                            type='password' 
                            labelText='Password' 
                            placeholder='●●●●●'
                            className='login-input'
                        />

                        <Link to="/">
                            <SuccessButton 
                                label='Login'
                                onClick={handleSubmit}
                                className='login-button'
                            />
                        </Link>

                        <Copywriting>
                            <TextCopywriting>&copy; {new Date().getFullYear()} All Rights Reserved.</TextCopywriting>
                        </Copywriting>
 
                    </FormInside>
                </Form>
            </ContainerCenter>
        </>
    );
}

 

export default LoginForm;