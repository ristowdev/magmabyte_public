import React from 'react';
import { InsideEditSection } from './style';
 
import InputWithMoreDetails from '../../../atoms/Inputs/InputWithMoreDetails';
import { Form, Field } from 'react-final-form'
import InputWithMoreDetails2 from '../../../atoms/Inputs/InputWithMoreDetails2';
  
interface IGetInTouchFormProps {
    data?: any;
}
   
export default function GetInTouchForm(props: IGetInTouchFormProps) {
    const { 
        data
    } = props;

    console.log(data);
    return (
      <InsideEditSection>

            <InputWithMoreDetails2
                name="main_text_left"
                labelText="Main text left"
                placeholder='Get in touch'
                className='edit-input'
                type='text'
            />

            <InputWithMoreDetails2
                name="right_location_text"
                labelText="Right text location"
                placeholder='Where can you find us'
                className='edit-input'
                type='text'
            />

            <InputWithMoreDetails2 
                name="right_sub_location_text"
                labelText="Right sub text location"
                placeholder='Head Office'
                className='edit-input'
                type='text'
            />

            <InputWithMoreDetails2 
                name="address"
                labelText="Address"
                placeholder='Pando Kljashev br. 66, 1000 Skopje'
                className='edit-input'
                type='text'
            />  

            <InputWithMoreDetails2 
                name="email"
                labelText="Email"
                placeholder='hello@magmabyte.com'
                className='edit-input'
                type='text'
            /> 

            <InputWithMoreDetails2 
                name="phone_number"
                labelText="Phone number"
                placeholder='+389 75 228 117'
                className='edit-input'
                type='text'
            />

            <InputWithMoreDetails2 
                name="button_text"
                labelText="Button text"
                placeholder='Contact us'
                className='edit-input'
                type='text'
            />

      </InsideEditSection>
              
    );
}
    
    