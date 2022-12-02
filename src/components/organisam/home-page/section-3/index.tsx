import React from 'react';
import EditButton from '../../../atoms/Buttons/EditButton';
import InputWithMoreDetails from '../../../atoms/Inputs/InputWithMoreDetails';
import { InsideEditSection } from './styles';



function Section3Edit() {
    return (
       <InsideEditSection> 
            <InputWithMoreDetails 
                labelText="Main text center"
                placeholder='Proficient in 20+ technologies and tools'
                className='edit-input'
            /> 

            <EditButton 
                className='edit-button-secton'
                label='Save'
            />

       </InsideEditSection>
    );
  }
  
  export default Section3Edit;
  