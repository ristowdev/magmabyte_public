import React from 'react';
import EditButton from '../../../atoms/Buttons/EditButton';
import InputWithMoreDetails from '../../../atoms/Inputs/InputWithMoreDetails';
import { InsideEditSection } from './style';



function Section1Edit() {
    return (
       <InsideEditSection> 
            <InputWithMoreDetails 
                labelText="Main text left"
                placeholder='We can help you achieve the perfect quality for your product'
                className='edit-input'
            />

            <InputWithMoreDetails 
                labelText="Sub text left"
                placeholder='Outsource your testing team'
                className='edit-input'
            />
            <InputWithMoreDetails 
                labelText="Checkpoint 1"
                placeholder='Scale your team seamlessly'
                className='edit-input'
            />
            <InputWithMoreDetails 
                labelText="Checkpoint 2"
                placeholder='Save up to 50% on employment costs'
                className='edit-input'
            />
            <InputWithMoreDetails 
                labelText="Checkpoint 3"
                placeholder='No additional administrative effort'
                className='edit-input'
            />
            <InputWithMoreDetails 
                labelText="Checkpoint 4"
                placeholder='Save time and money spent on recruiting and interviewing'
                className='edit-input'
            />
            <InputWithMoreDetails 
                labelText="Checkpoint 5"
                placeholder='Flexibility in expertise and seniority'
                className='edit-input'
            />
            <InputWithMoreDetails 
                labelText="Button text"
                placeholder='Schedule a call'
                className='edit-input'
            />

            <EditButton 
                className='edit-button-secton'
                label='Save'
            />

       </InsideEditSection>
    );
  }
  
  export default Section1Edit;
  