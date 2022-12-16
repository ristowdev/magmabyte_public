import React, { useEffect, useState } from 'react';
import SuccessButton from '../../../atoms/Buttons/CustomButtons';
import CustomInput from '../../../atoms/Inputs/CustomInput';
import { 
    ContainerCenter, 
    Copywriting,  
    Form,  
    // Form, 
    FormInside,
    Logo,
    LogoField,
    LogoText,
    SubText,
    SubTextField,
    TextCopywriting
} from './style';

import LogoIcon from "../../../../media/LogoIcon.png";
import { Link, useNavigate } from 'react-router-dom';
import DefaultForm from '../../../atoms/Forms/DefaultForm';
import InputWithMoreDetails2 from '../../../atoms/Inputs/InputWithMoreDetails2';
import * as yup from 'yup';
import { useSigninUserMutation } from '../../../../slices/auth/authApiSlices';
import ErrorMessage from '../../../atoms/Snacbars/ErrorMessage'; 
import { useAppDispatch } from '../../../../store/hook';
import { setUser } from '../../../../slices/auth/authSlice';

interface ILoginFormProps {

}

const LoginForm = ({
}) => {
 
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    //error snack bar
    const [openSnackErrorBar, setOpenSnackErrorBar] = useState<boolean>(false);
    const [snackBarErrorMessage, setSnackBarErrorMessage] = useState<string>('');

    const [signinUser, { data, isLoading, error, isError, isSuccess }] =
    useSigninUserMutation();

    const handleCreateNewPage = async ({ ...values }) => { 
        signinUser({email:values.email, password:values.password});
         
    }  
    useEffect(()=>{
        if(isError){
            setOpenSnackErrorBar(true);
            setSnackBarErrorMessage('Invalid login details!');
        }
    },[isError]);


    useEffect(()=>{
        if(isSuccess){ 
            localStorage.setItem("token", data);
            dispatch(setUser({ token: data}));
            navigate("/pages");
        }
    },[isSuccess]);

    return (
        <>
            <ContainerCenter> 

            <DefaultForm
                onSubmit={handleCreateNewPage}
                schema={yup.object({
                    email: yup.string().required('required'),
                    password: yup.string().required('required'),
                })}
                >
                <Form>
                    <FormInside>
                        <LogoField>
                            <Logo src={LogoIcon}/>
                            <LogoText>Magmabyte</LogoText>
                        </LogoField>
                        <SubTextField>
                            <SubText>Admin panel</SubText>
                        </SubTextField>

                        <InputWithMoreDetails2
                            name="email"
                            labelText="Email"
                            placeholder='Enter email'
                            className='edit-input'
                            type='text'
                        />
                        <InputWithMoreDetails2
                            name="password"
                            labelText="Password"
                            placeholder='●●●●●'
                            className='edit-input'
                            type='password'
                        />
                        {/* <CustomInput 
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
                        /> */}
 
                            <SuccessButton 
                                label='Login'
                                // onClick={handleSubmit}
                                className='login-button'
                                type="submit"
                            /> 
 

                        <Copywriting>
                            <TextCopywriting>&copy; {new Date().getFullYear()} All Rights Reserved.</TextCopywriting>
                        </Copywriting>
 
                    </FormInside>
                </Form>
            </DefaultForm>
            </ContainerCenter>
            <ErrorMessage
                open={openSnackErrorBar}
                onClose={setOpenSnackErrorBar}
                errorMessage={snackBarErrorMessage}
            />
        </>
    );
}

 

export default LoginForm;