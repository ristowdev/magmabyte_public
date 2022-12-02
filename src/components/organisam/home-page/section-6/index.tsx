import React from 'react';
import EditButton from '../../../atoms/Buttons/EditButton';
import InputWithMoreDetails from '../../../atoms/Inputs/InputWithMoreDetails';
import { InsideEditSection } from './styles';



function Section6Edit() {
    return (
       <InsideEditSection> 
            <InputWithMoreDetails 
                labelText="Main text left"
                placeholder='Get in touch'
                className='edit-input'
            /> 

            <InputWithMoreDetails 
                labelText="Main text right"
                placeholder='Where can you find us'
                className='edit-input'
            /> 

            <InputWithMoreDetails 
                labelText="Sub text right"
                placeholder='Head Office'
                className='edit-input'
            /> 

            <InputWithMoreDetails 
                labelText="Office address"
                placeholder='Pando Kljashev br. 66, 1000 Skopje'
                className='edit-input'
            /> 
            <InputWithMoreDetails 
                labelText="E-mail"
                placeholder='hello@magmabyte.com'
                className='edit-input'
            /> 
            <InputWithMoreDetails 
                labelText="Phonenumber"
                placeholder='+389 75 228 117'
                className='edit-input'
            /> 
            <InputWithMoreDetails 
                labelText="Send form button"
                placeholder='Contact us'
                className='edit-input'
            /> 

            <EditButton 
                className='edit-button-secton'
                label='Save'
            />

       </InsideEditSection>
    );
  }
  
  export default Section6Edit;
  